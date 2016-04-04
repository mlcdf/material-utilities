# Material Utilities

A set of CSS custom variables and classes to bring Material shadows and opacities to your project. If you're looking for the Material color palette, head over to https://github.com/shuhei/material-colors.

Inspired by [colors](https://github.com/mrmrs/colors).

## Install

* Download the [.zip](https://github.com/mlcdf/material-paper/archive/master.zip)
* NPM: `npm install material-utitilies`

Reminder: Use the `--production` flag to only install the "dependencies" (so without the "devDependencies").

## Usage

### PostCSS

Import the module.
```css
@import "material-utilities.css";
```

Use the CSS custom property matching the shadow/opacity you want.
```css
.card{
  box-shadow: var(--z1);
}
.divider{
  color: var(--dark-opacity-1);
}
```
Aaaaand that's it!

Note : You'll need PostCSS plugins that features [CSS Custom Properties](http://www.w3.org/TR/css-variables/#defining-variables) and `@import` (like [cssnext](https://github.com/cssnext/cssnext/)).

### CSS

Add the following link in your html file.
```html
<link href="path/to/module/material-utilities.min.css" rel="stylesheet" type="text/css">
```
And you're ready to go!

## License
[MIT](http://opensource.org/licenses/MIT)

## Author
Maxime Le Conte des Floris
