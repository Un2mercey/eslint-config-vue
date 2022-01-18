module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "rules": {
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "space-in-parens": [
            1
        ],
        "template-curly-spacing": [
            1
        ],
        "array-bracket-spacing": [
            1
        ],
        "object-curly-spacing": [
            1
        ],
        "computed-property-spacing": [
            0
        ],
        "no-multiple-empty-lines": [
            2,
            {
                "max": 1,
                "maxEOF": 0,
                "maxBOF": 0
            }
        ],
        "quotes": [
            2,
            "double",
            "avoid-escape"
        ],
        "no-use-before-define": [
            2,
            {
                "functions": false
            }
        ],
        "prefer-const": 1,
        "no-unused-expressions": [
            2,
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "no-unused-vars": [
            1
        ],
        "import/no-extraneous-dependencies": [
            1
        ],
        "vue/require-v-for-key": [
            0
        ],
        "func-names": [
            0
        ],
        "global-require": [
            1
        ],
        "no-param-reassign": [
            2,
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "state"
                ]
            }
        ],
        "no-shadow": [
            2,
            {
                "allow": [
                    "state"
                ]
            }
        ],
        "max-len": [
            2,
            150
        ],
        "complexity": [
            "error",
            {
                "max": 10
            }
        ],
        "camelcase": [
            1,
            {
                "properties": "always",
                "ignoreDestructuring": true
            }
        ],
        "no-console": "off",
        // "prefer-regex-literals": [
        //     "error",
        //     {
        //         "disallowRedundantWrapping": true
        //     }
        // ]
    }
}
