module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'filenames', 'fp', 'import', 'jsdoc'],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'never'
            }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
                overrides: {
                    parameterProperties: 'explicit'
                }
            }
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'static-field',
                    'field',
                    'public-static-method',
                    'constructor',
                    'method',
                    'protected-method',
                    'private-method'
                ]
            }
        ],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreProperties: true,
                ignoreParameters: true
            }
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true
            }
        ],
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                allowAny: true
            }
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'never',
                types: 'never',
                lib: 'always'
            }
        ],
        // lots of false positives right now
        // '@typescript-eslint/unbound-method': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['strictCamelCase']
            },

            {
                selector: 'variable',
                format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE']
            },
            {
                selector: 'parameter',
                format: ['strictCamelCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'memberLike',
                format: ['strictCamelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['strictCamelCase'],
                leadingUnderscore: 'require'
            },
            {
                selector: 'enumMember',
                format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE']
            },
            {
                selector: 'typeLike',
                format: ['StrictPascalCase']
            },
            {
                selector: 'interface',
                format: ['StrictPascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: false
                }
            }
        ],
        'consistent-return': 'error',
        'default-case': 'error',
        // not a thing right now
        // 'deprecation': 'error',
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        'eol-last': ['error', 'always'],
        'filenames/match-exported': 'error',
        'fp/no-delete': 'error',
        'guard-for-in': 'error',
        'import/no-unassigned-import': 'error',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        // errors with ts
        // 'jsdoc/check-param-names': 'error',
        // 'jsdoc/require-param': 'error',
        'jsdoc/check-tag-names': [
            'error',
            {
                definedTags: ['inheritDoc', 'expandParams', 'hideProtected', 'eventListener']
            }
        ],
        'jsdoc/newline-after-description': ['error', 'always'],
        'max-classes-per-file': ['error', 1],
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-eval': 'error',
        'no-extra-semi': 'error',
        'no-ex-assign': 'error',
        'no-fallthrough': [
            'error',
            {
                commentPattern: 'fallthrough'
            }
        ],
        'no-irregular-whitespace': 'error',
        'no-labels': 'error',
        'no-negated-condition': 'error',
        'no-new': 'error',
        'no-new-wrappers': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'error',
        'no-restricted-syntax': [
            'error',
            {
                selector:
                    'BinaryExpression[operator=/^[!=]==?$/][left.raw=/^(true|false)$/], BinaryExpression[operator=/^[!=]==?$/][right.raw=/^(true|false)$/]',
                message: 'Don\'t compare for equality against boolean literals'
            },
            {
                selector: 'SequenceExpression',
                message: 'The comma operator is confusing and a common mistake. Don’t use it!'
            }
        ],
        'no-return-await': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-sparse-arrays': 'error',
        'no-throw-literal': 'error',
        'no-unexpected-multiline': 'error',
        'no-unneeded-ternary': 'error',
        'no-unsafe-finally': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error'
        ],
        'no-var': 'error',
        'prefer-arrow-callback': [
            'error',
            {
                allowUnboundThis: false
            }
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true
            }
        ],
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        quotes: ['error', 'single', { avoidEscape: true }],
        radix: ['error', 'always'],
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['*', '/']
            }
        ],
        'use-isnan': 'error',
        yoda: ['error', 'never']
    }
};
