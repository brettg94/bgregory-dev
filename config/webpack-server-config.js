require('dotenv').config()
const path = require('path')
const ROOT_DIR = path.resolve(__dirname, '../')

module.exports = {
  entry: './server/server-entry.ts',
  target: 'node',
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',
  output: {
    path: `${ROOT_DIR}/dist-server`,
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.mjs', '.cjs', '.web.js', '.ts', '.js'],
    modules: ['node_modules'],
    plugins: []
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts*/,
        exclude: /(node_modules|.webpack)/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: `${ROOT_DIR}/tsconfig.json`
            }
          }
        ]
      }
    ]
  }
}
