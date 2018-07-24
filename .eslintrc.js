module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals":{
        require: false,
    },
//    "extends": "eslint:recommended",
    "extends": "airbnb" ,
    "rules": {
        "global-require": 0,
        "func-names" : ["error", "never"],
//        "one-var": ["error", "never"],
//        "one-var-declaration-per-line": ["error", "initializations"],
        "no-use-before-define": ["error", { "variables": false, "functions": false }],
        "comma-dangle": "off",
        "one-var": "off",
        "strict": "off",
        "spaced-comment": "off",
        "no-underscore-dangle": "off",
        "no-plusplus": "off",
        "max-len": ["error",  { "code": 120, "tabWidth": 4, "ignoreStrings": true }],
        "one-var-declaration-per-line": "off",
        "no-param-reassign": "off",
        "no-return-assign": ["error", "except-parens"],
        "no-console": "off",
        "no-unused-vars": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};