const path = require('path')
// const {ProvidePlugin} = require('webpack')
//     // "indent": [2, 2, {
//     //   "ignoreJSX": 1,
//     //   "SwitchCase": 1,
//     //   "VariableDeclarator": {
//     //     "var": 2,
//     //     "let": 2,
//     //     "const": 3
//     //   }
//     // }],

module.exports = {
  devtool: 'sourcemap',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  }
}
