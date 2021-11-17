require('dotenv').config()
const path = require('path')
const ROOT_DIR = path.resolve(__dirname, '../')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: './server/server-entry.ts',
  target: 'node',
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  output: {
    path: `${ROOT_DIR}/dist-server`,
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.mjs', '.cjs', '.web.js', '.ts', '.js'],
    modules: ['node_modules'],
    plugins: [new TsconfigPathsPlugin()]
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
              configFile: `${ROOT_DIR}/tsconfig.json`
            }
          }
        ]
      }
    ]
  }
}
