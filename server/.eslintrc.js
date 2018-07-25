module.exports = {
  extends: 'airbnb-base',
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  rules: {
    'typescript/no-explicit-any': ['warn'],
    'no-undef': 0,
  },
};
