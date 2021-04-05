module.exports = {
  presets: [
    [
      '@vue/babel-preset-app',
      {
        jsx: false,
        useBuiltIns: 'entry',
        corejs: 3
      }
    ],
  ],
  env: {
    development: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: 'css'
          },
          'ant-design-vue'
        ]
      ]
    },
    production: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: 'css'
          },
          'ant-design-vue'
        ],
        'lodash',
        'transform-remove-console'
      ]
    }
  },
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};
