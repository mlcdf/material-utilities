const fs = require('fs')
const cssscss = require('css-scss')
const postcss = require('postcss')
const postcssImport = require('postcss-import')
const postcssCustomProperties = require('postcss-custom-properties')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const sourceFile = 'src/material-utilities.css'
const css = fs.readFileSync(sourceFile, 'utf8')

// Create a dist folder if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', (err) => {
    if (err) throw err
  })
}

/*
 *  PostCSS => CSS
 */
postcss([postcssImport, postcssCustomProperties, autoprefixer, cssnano])
  .process(css, {
    from: sourceFile,
    to: 'dist/material-utilities.min.css'
  })
  .then((result) => {
    fs.writeFileSync('dist/material-utilities.min.css', result.css)
    if (result.map) fs.writeFileSync('material-utilities.min.css.map', result.map)
  })

postcss([postcssImport, postcssCustomProperties, autoprefixer])
  .process(css, {
    from: sourceFile,
    to: 'material-utilities.css'
  })
  .then((result) => {
    fs.writeFileSync('dist/material-utilities.css', result.css)
    if (result.map) fs.writeFileSync('dist/material-utilities.css.map', result.map)
  })

/*
 *  PostCSS => SCSS
 */
for (let mod of ['classes', 'variables']) {
  const file = fs.readFileSync('src/' + mod + '.css', 'utf8')
  fs.writeFileSync('dist/' + mod + '.scss', cssscss(file))
}
