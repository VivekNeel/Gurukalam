module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    "react",
    "flowtype",
    "jsx-a11y",
    "import",
    "jest",
  ],
  env: {
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    "sourceType": "module",
    "codeFrame": true,
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "react/sort-comp": [
      1, {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
      }
    ],
    "no-param-reassign": [
      1, {
        "ignorePropertyModificationsFor": ["draft"],
      }
    ],
    "react/require-default-props": [
      1,
      { forbidDefaultForRequired: false }
    ],
    "react/default-props-match-prop-types": [
      'error',
      { allowRequiredDefaults: true }
    ],
    "react/prop-types": [2, {}],
    "react/prefer-stateless-function": [
      1, {
        "ignorePureComponents": true
      }
    ],
    "react/forbid-prop-types": [0, {
      "forbid": []
    }],
    "import/extensions": [1, "never", {
      "svg": "always"
    }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
  },
}