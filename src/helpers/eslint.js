import react from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import imports from 'eslint-plugin-import';
import globals from 'globals';

const defaultRules = {
    'array-bracket-spacing': 'warn',
    'arrow-parens': 'warn',
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'callback-return': 'error',
    'comma-dangle': 'warn',
    'comma-spacing': 'warn',
    'consistent-return': 'error',
    'consistent-this': 'error',
    'default-case': 'warn',
    'eqeqeq': 'warn',
    'func-call-spacing': 'warn',
    'lines-between-class-members': 'warn',
    'multiline-ternary': 'warn',
    'newline-before-return': 'warn',
    'no-alert': 'error',
    'no-await-in-loop': 'warn',
    'no-catch-shadow': 'warn',
    'no-class-assign': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-function': 'warn',
    'no-empty-pattern': 'warn',
    'no-empty': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-label': 'warn',
    'no-extra-parens': 'warn',
    'no-extra-semi': 'warn',
    'no-fallthrough': 'warn',
    'no-floating-decimal': 'warn',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-regexp': 'warn',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'warn',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-await': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'error',
    'no-tabs': 'error',
    'no-this-before-super': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'warn',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'object-curly-newline': 'warn',
    'object-property-newline': 'warn',
    'require-await': 'warn',
    'require-jsdoc': 'warn',
    'require-yield': 'warn',
    'space-before-blocks': 'warn',
    'use-isnan': 'warn',
    'linebreak-style': [
        'error',
        'unix'
    ],
    'quotes': [
        'warn',
        'single'
    ],
    'semi': [
        'warn',
        'always'
    ]
};

const sortingPlugins = {
    'simple-import-sort': simpleImportSort,
    'import': imports
}

const sortingRules = {
    // "simple-import-sort/imports": "warn",
    // "simple-import-sort/exports": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "import/order": [
        "warn",
        {
            groups: [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
                "object",
                "type"
            ]
        }
    ]
}

export default [
    {
        ignores: ['*.config.mjs', 'dist']
    },
    {
        files: ['**/*.js'],
        plugins: {
            ...sortingPlugins
        },
        languageOptions: {
            globals: {
                ...globals.browser
            }
        },
        rules: {
            ...defaultRules,
            ...sortingRules,
        }
    },
    {
        files: ['**/*.jsx'],
        plugins: {
            react,
            ...sortingPlugins
        },
        languageOptions: {
            ...reactRecommended.languageOptions,
            globals: {
                ...globals.browser
            }
        },
        rules: {
            ...defaultRules,
            ...reactRecommended.rules,
            ...sortingRules,
            'react/react-in-jsx-scope': 0,
            'react/prop-types': 0
        }
    }
];