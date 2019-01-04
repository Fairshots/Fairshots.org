module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "import", "jest", "jsx-a11y", "prettier"],
  rules: {
    "linebreak-style": "off",
    quotes: ["error", "double"],
    "arrow-parens": "off",
    "comma-dangle": "off",
    "constructor-super": "warn",
    "func-names": ["error", "never"],
    "max-len": "off",
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": "off",
    semi: ["error", "always", { omitLastInOneLineBlock: true }],
    "valid-typeof": "warn",
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "prettier/prettier": ["error"]
  }
};
