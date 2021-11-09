require('dotenv').config()
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, '../dist/public')
const APP_DIR = path.resolve(__dirname, '../client')
const ROOT_DIR = path.resolve(__dirname, '../')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config = {
  mode: process.env.NODE_ENV,
  entry: {
    main: APP_DIR + '/client-entry.tsx'
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    usedExports: true,
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'async'
    }
  },
  output: {
    filename: `[name].js`,
    chunkFilename: '[name]-[contenthash].js',
    path: BUILD_DIR,
    sourceMapFilename: '[name].js.map'
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'cheap-source-map' : undefined,
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: '[name]-[contenthash].css',
      ignoreOrder: false
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.mjs', '.cjs', '.web.js', '.ts', '.tsx', '.js', '.scss'],
    modules: ['node_modules'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      constants$: APP_DIR + '/styles/constants.scss'
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                //Establish a naming scheme for CSS modules:
                //component-name__cssClassName--hash
                localIdentName: '[folder]__[local]--[hash:base64:5]'
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
                auto: true
              }
            }
          }
        ]
      },
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
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              prefix: 'img/',
              name: 'img-[contenthash].[ext]',
              publicPath: process.env.CDN_URL && process.env.SERVE_ASSETS_FROM_CDN ? process.env.CDN_URL : '/'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
