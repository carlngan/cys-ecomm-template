module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "no-console": ["off"]
  },
  env: {
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: "latest"
    }
  }
}
