module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/state-in-constructor": "off",
        "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
        "react/prop-types": "off",
        "global-require": 0
        
    },
    "ignorePatterns": [
        ".eslintrc.js"
    ],
}
