module.exports = {
  env: {
    node: true,
  },
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    parser: "babel-eslint",
    ecmaVersion: 2015,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
  },
};
