const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  stories: ['./stories/*.js'],
  addons: [
    '@storybook/addon-docs'
  ],
  webpackFinal: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'vue$': 'vue/dist/vue.esm.js',
      '@/components': resolve('../src/components'),
    };

    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            sourceMap: false
          }
        }
      ],
    });

    return config;
  }
};
