module.exports = {
  preset: '@vue/cli-plugin-unit-jest',

  'roots': [
    `<rootDir>/src`,
  ],

  'collectCoverageFrom': [
    `src/**/*.{js,vue}`,
    `!src/**/{main,router}.js`,
    '!**/node_modules/**',
  ],

  'testMatch': [
    `<rootDir>/src/**/__tests__/**/*.{js,vue}`,
    `<rootDir>/src/**/*.{spec,test}.{js,vue}`,
  ],

  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },

  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|vue)$',
    '^.+\\.module\\.(css|less|sass|scss)$',
  ],

  'moduleNameMapper': {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  'moduleFileExtensions': [
    'js',
    'json',
    'vue',
  ],

  'watchPlugins': [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
