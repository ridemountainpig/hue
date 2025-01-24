# Hue Palette

![CleanShot 2024-08-31 at 15 58 09@2x](https://github.com/user-attachments/assets/d4a9d508-e80e-4c51-a745-31389bfd40ee)

Hue Palette is a tool designed to help developers and designers effortlessly create custom hue palettes for their projects. With a user-friendly interface and powerful features, Hue Palette makes it easy to generate, preview, and use hue colors in your design and development workflows.

## Features

- **Pre-built Hue Samples**: Explore a wide range of pre-built hue samples to find the perfect color scheme for your project.
- **Custom Hue Generator**: Easily generate custom hues tailored to your specific needs with the intuitive hue generator tool.
- **Tailwind CSS Integration**: Instantly generate Tailwind CSS configuration code for the hues you create, allowing for seamless integration into your projects.

## Getting Started

### Visit the Application

To get started, visit [Hue Palette](https://www.hue-palette.com/) or the [Hue Palette Raycast Extension](https://www.raycast.com/ridemountainpig/hue-palette) and explore the available hue samples or start generating your custom hues.

### Creating a Hue Palette

1. **Explore Samples**: Browse through the pre-built hue samples to see if any fit your project's needs.
2. **Generate Custom Hues**: Use the [Hue Generator](https://www.hue-palette.com/hue-generator) to create your own palette by selecting a base hue and adjusting the parameters to suit your design requirements.
3. **Preview**: See a live preview of your hue palette as you make adjustments.
4. **Export**: Once you're satisfied with your palette, export the Tailwind CSS configuration code provided for easy implementation in your project.

### Using with Tailwind CSS

After generating your hue palette, you can quickly integrate it into your Tailwind CSS setup:

1. Copy the generated Tailwind config code.
2. Paste the code into your `CSS` file for Tailwind V4 or your `tailwind.config.js` file for Tailwind V3.
3. Start using your custom hues in your CSS classes.

### Example

#### Tailwind V4

```css
@theme {
    // Your custom hue palette here
}
```

#### Tailwind V3

```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                // Your custom hue palette here
            },
        },
    },
};
```
