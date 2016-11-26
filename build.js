const fs = require('fs')
const cssscss = require('css-scss')
const postcss = require('postcss')
const postcssImport = require('postcss-import')
const postcssCustomProperties = require('postcss-custom-properties')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const filename = 'src/material-utilities.css'
let css = fs.readFileSync(filename, 'utf8')

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', (err) => {
    if (err) throw err
  })
}

postcss([postcssImport, postcssCustomProperties, autoprefixer, cssnano])
  .process(css, {
    from: filename,
    to: 'dist/material-utilities.min.css'
  })
  .then((result) => {
    fs.writeFileSync('dist/material-utilities.min.css', result.css)
    if (result.map) fs.writeFileSync('material-utilities.min.css.map', result.map)
  })

postcss([postcssImport, postcssCustomProperties, autoprefixer])
  .process(css, {
    from: filename,
    to: 'material-utilities.css'
  })
  .then((result) => {
    fs.writeFileSync('dist/material-utilities.css', result.css)
    if (result.map) fs.writeFileSync('dist/material-utilities.css.map', result.map)
  })

const modules = [
  'classes',
  'variables'
]

for (let module of modules) {
  const file = fs.readFileSync('src/' + module + '.css', 'utf8')
  fs.writeFileSync('dist/' + module + '.scss', cssscss(file))
}
