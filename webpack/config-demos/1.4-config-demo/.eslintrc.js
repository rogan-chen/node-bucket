'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: '',

  // Stop ESLint from looking for a configuration file in parent folders
  'root': true,

  plugins: [],

  // We're stricter than the default config, mostly. We'll override a few rules
  // and then enable some React specific ones.
  rules: {
    'eqeqeq': [ERROR, 'allow-null'],
  },

  overrides: [
    {
      files: ['**/__tests__/*.js'],
      rules: {
        // https://github.com/jest-community/eslint-plugin-jest
        'jest/no-focused-tests': ERROR,
      }
    }
  ],

  globals: {
    spyOnDev: true,
    spyOnDevAndProd: true,
    spyOnProd: true,
    __PROFILE__: true,
    __UMD__: true,
  },
};
