module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "jest": true
      },
    "rules": {
        "func-names": [0],
        "no-unused-expressions": [0],
        "camelcase": [0],
        "import/prefer-default-export": [0],
        "arrow-body-style": [0],
        "react/jsx-filename-extension": [ 1, {"extensions": [".jsx", ".js"] }],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [ 0, { "aspects": ["invalidHref"] }],
        "react/jsx-no-literals": [ 0, { "noStrings": true }],
        "react/no-set-state": [0],
        "react/require-optimization": [0],
        "react/no-did-mount-set-state": [0],
      },
};
