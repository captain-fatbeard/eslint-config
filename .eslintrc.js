module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
  ],
  plugins: [
  ],
  rules: {
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'indent': [
      'error',
      4
    ],
    'no-multi-spaces': [
      'error'
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'no-shadow': [
      'error'
    ],
    'max-params': [
      'error',
      3
    ],
    'require-await': 'error',
    'eol-last': [
      'error',
      'always'
    ]
  }
};