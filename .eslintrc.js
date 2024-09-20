module.exports = {
  env: {
      browser: true, 
      node: true, 
      es2023: true, 
      jest: true, 
  },
  extends: 'airbnb-base', 
  rules: {
      'no-plusplus': 'off',
      'no-console': 'off',
      'max-classes-per-file': 'off',
  },
};
