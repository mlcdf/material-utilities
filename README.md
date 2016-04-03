# Material Utilities

A set of CSS custom variables and classes to bring Material shadows and opacities to your project. If you're looking for the Material color palette, head over to https://github.com/shuhei/material-colors.
Inspired by [colors](https://github.com/mrmrs/colors).

## Install

* Download the [.zip](https://github.com/mlcdf/material-paper/archive/master.zip)
* NPM: `npm install material-utitilies`

## Usage

### With PostCSS

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
/!\ Require PostCSS plugins that features [CSS Custom Properties](http://www.w3.org/TR/css-variables/#defining-variables) and `@import` (like [cssnext](https://github.com/cssnext/cssnext/)).

## License
[MIT](http://opensource.org/licenses/MIT)

## Author
Maxime Le Conte des Floris
