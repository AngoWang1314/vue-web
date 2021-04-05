const webpack = require('webpack');
const path = require('path');
const postcssNormalize = require('postcss-normalize');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// 按模块开发
const npmConfigArgv = JSON.parse(process.env.npm_config_argv);
if (!npmConfigArgv.cooked[3]) {
  console.log('缺少模块参数');
  process.exit(1);
}
process.env.APP_PATH = 'apps/' + npmConfigArgv.cooked[3];
process.env.APP = npmConfigArgv.cooked[3];

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${process.env.APP}` : `/${process.env.APP}`,
  outputDir: `build/${process.env.APP}`,
  indexPath: 'index.html',
  filenameHashing: true,
  pages: {
    index: {
      entry: `src/apps/${process.env.APP}/main.js`,
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  productionSourceMap: false,
  crossorigin: 'anonymous',
  integrity: true,
  parallel: require('os').cpus().length > 1,
  css: {
    requireModuleExtension: true,
    extract: false,
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[hash]'
        }
      },
      postcss: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          postcssNormalize(),
        ],
        sourceMap: process.env.NODE_ENV !== 'production'
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@/apis': path.resolve(__dirname + '/apis'),
        '@/apps': path.resolve(__dirname + '/apps'),
        '@/components': path.resolve(__dirname + '/components'),
        '@/pages': path.resolve(__dirname + '/pages'),
        '@/stores': path.resolve(__dirname + '/stores'),
        '@/styles': path.resolve(__dirname + '/styles'),
        '@/utils': path.resolve(__dirname + '/utils'),
      }
    },
    plugins: [
      new AntDesignThemePlugin({
        antDir: path.join(__dirname, './node_modules/ant-design-vue'),
        stylesDir: path.join(__dirname, './src'),
        varFile: path.join(__dirname, './src/styles/color.less'),
        themeVariables: ['@primary-color'],
        indexFileName: 'index.html',
        generateOnce: false,
        lessUrl: 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js',
        publicPath: `/${process.env.APP}`,
        customColorRegexArray: [],
      }),
      new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /zh-cn/,
      ),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(html|css|js|json)/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
    output: {
      jsonpFunction: `webpackJsonp${process.env.APP.charAt(0).toUpperCase() + process.env.APP.slice(1)}`,
    }
  },
  chainWebpack: (chain) => {
    // console.log(chain);
  },
  devServer: {
    hot: true,
    open: true,
    host: '0.0.0.0',
    port: 8080,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://www.xyz.com/api',
        ws: true,
        changeOrigin: true
      },
    }
  },
};
