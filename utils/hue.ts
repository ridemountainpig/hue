function hexToRgb(hex: string) {
    hex = hex.replace(/^#/, "");

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map(function (char) {
                return char + char;
            })
            .join("");
    }

    var bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
}

function rgbToHex(r: number, g: number, b: number) {
    return (
        "#" +
        [r, g, b]
            .map(function (x) {
                var hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}

function mixColors(color1: string, color2: string, percentage: number) {
    var rgb1 = hexToRgb(color1);
    var rgb2 = hexToRgb(color2);

    var mixedRgb = {
        r: Math.round(rgb1.r * percentage + rgb2.r * (1 - percentage)),
        g: Math.round(rgb1.g * percentage + rgb2.g * (1 - percentage)),
        b: Math.round(rgb1.b * percentage + rgb2.b * (1 - percentage)),
    };

    return rgbToHex(mixedRgb.r, mixedRgb.g, mixedRgb.b);
}

function generateHue(colorOne: string, colorTwo: string) {
    const percentage = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    const tailwind_count = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colors = [];
    const mixColorsTmp = [];
    colors.push(colorOne);
    for (let i = 0; i < percentage.length; i++) {
        mixColorsTmp.push(mixColors(colorOne, colorTwo, percentage[i]));
    }
    colors.push(...mixColorsTmp.reverse());
    colors.push(colorTwo);

    const tailwind_colors: Record<string, string> = {};

    for (let i = 0; i < colors.length; i++) {
        tailwind_colors[tailwind_count[i]] = colors[i];
    }

    const hue = {
        colors: colors,
        tailwind_colors: tailwind_colors,
    };

    return hue;
}

const exportedFunctions = {
    generateHue,
};

export default exportedFunctions;
