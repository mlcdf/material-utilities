# Material Utilities 

> A set of CSS custom variables & classes to bring Material shadows and opacities to your project.

[![npm](https://img.shields.io/npm/v/material-utilities.svg)]() [![npm](https://img.shields.io/npm/dt/material-utilities.svg)]() ![gzip size](http://img.badgesize.io/https://unpkg.com/material-utilities/dist/material-utilities.min.css?compression=gzip&label=gzip%20size) ![size](http://img.badgesize.io/https://unpkg.com/material-utilities/dist/material-utilities.min.css?label=size)

![](screenshot.png)

If you're looking for the Material color palette, head over to https://github.com/shuhei/material-colors.
Inspired by [colors](https://github.com/mrmrs/colors).

## Install

```console
$ npm install material-utilities
```

Reminder: use the `--production` flag to only install the "dependencies" (so without the "devDependencies").

## Usage

### PostCSS

Import the module
```css
@import "~material-utilities/src/material-utilities.css";
```

Use the CSS custom property matching the shadow/opacity you want
```css
.card{
  box-shadow: var(--shadow-1);
}
.divider{
  color: var(--dark-opacity-1);
}
```

Note: You'll need PostCSS plugins that features [CSS Custom Properties](http://www.w3.org/TR/css-variables/#defining-variables) and `@import` (like [cssnext](https://github.com/cssnext/cssnext/)).

### SCSS

Import the module
```css
@import "~material-utilities/dist/classes.scss";
@import "~material-utilities/dist/variables.scss";
```

Use the CSS custom property matching the shadow/opacity you want
```css
.card{
  box-shadow: var(--shadow-1);
}
.divider{
  color: var(--dark-opacity-1);
}
```

### CSS

Just add the following link in your html
```html
<link rel="stylesheet" href="https://unpkg.com/material-utilities@0.8.2/dist/material-utilities.min.css">
<!-- If you use a build tool like Gulp to concatenate your stylesheets, you should use 
<link rel="stylesheet" href="path/to/module/material-utilities.min.css">
-->
```

Use the CSS custom property matching the shadow/opacity you want
```html
<button class="shadow-1 shadow-transition shadow-5-hover">Download</button>
```

## Development

Clone the repository on your machine
```console
$ git clone https://github.com/mlcdf/material-utilities.git && cd material-utilities
```
Install local dependencies
```console
$ npm install
```
> You can start coding!

Running `npm start` will generate the minified and unminified CSS files as well as the SCSS files in the dist folder.

## Contributing

Remarks, advices & contributions are welcome. Feel free to open an issue or submit a pull request.

## License

MIT © [Maxime Le Conte des Floris](https://mlcdf.com)
