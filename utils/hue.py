import requests
import json

def hex_to_rgb(hex):
    hex = hex.lstrip('#')
    if len(hex) == 3:
        hex = ''.join([char * 2 for char in hex])
    return tuple(int(hex[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(*rgb)

def mix_colors(color1, color2, percentage):
    rgb1 = hex_to_rgb(color1)
    rgb2 = hex_to_rgb(color2)
    
    mixed_rgb = tuple(
        int(rgb1[i] * percentage + rgb2[i] * (1 - percentage))
        for i in range(3)
    )
    
    return rgb_to_hex(mixed_rgb)

if __name__ == "__main__":
    theme_data = requests.get("https://raw.githubusercontent.com/monkeytype-hub/monkeytype-readme/master/monkeytype-data/themes.json").json()

    percentage = [0.25, 0.5, 0.75]
    tailwind_percentage = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
    hue_data = []

    for theme in theme_data:
        main_color = theme["mainColor"]
        bg_color = theme["bgColor"]
        sub_alt_color = theme["subAltColor"]
        text_color = theme["subColor"]

        colors = []
        colors.append(bg_color)
        for i in range(len(percentage)):
            colors.append(mix_colors(main_color, sub_alt_color, percentage[i]))
        colors.append(main_color)

        tailwind_colors_name = theme["name"].replace("_", "-")
        tailwind_colors_count = 100
        tailwind_colors = {}
        tailwind_colors["50"] = bg_color
        for i in range(len(tailwind_percentage)):
            tailwind_colors[tailwind_colors_count] = mix_colors(main_color, sub_alt_color, tailwind_percentage[i])
            tailwind_colors_count += 100
        tailwind_colors[tailwind_colors_count] = main_color

        hue_tmp = {}
        hue_name = theme["name"].split("_")
        for i in range(len(hue_name)):
            hue_name[i] = hue_name[i][0].upper() + hue_name[i][1:]

        hue_tmp["name"] = " ".join(hue_name)
        hue_tmp["colors"] = colors
        hue_tmp["tailwind_colors_name"] = tailwind_colors_name
        hue_tmp["tailwind_colors"] = tailwind_colors
        hue_tmp["background"] = main_color
        hue_tmp["text"] = text_color
        hue_data.append(hue_tmp)

    with open("public/hue.json", "w") as f:
        json.dump(hue_data, f, indent=4)

