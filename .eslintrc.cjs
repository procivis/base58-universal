module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc',
    'digitalbazaar/module'
  ],
  ignorePatterns: ['dist/'],
  rules: {
    'jsdoc/check-examples': 'off'
    'jsdoc/require-description-complete-sentence': 'off'
  }
};
