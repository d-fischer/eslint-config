const useTypeInfo = !process.env.DF_ESLINT_NO_TYPE_INFO;
const ifTypeInfo = val => (useTypeInfo ? val : ['off']);
const errorIfTypeInfo = ifTypeInfo('error');

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: useTypeInfo ? 'tsconfig.json' : undefined,
		ecmaVersion: 2019,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'fp', 'import', 'jsdoc'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
		'@typescript-eslint/await-thenable': errorIfTypeInfo,
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': false,
				'ts-nocheck': false,
				'ts-check': true
			}
		],
		'@typescript-eslint/ban-tslint-comment': 'error',
		// uses defaults only
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never'
			}
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true
			}
		],
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': errorIfTypeInfo,
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
				overrides: {
					parameterProperties: 'explicit'
				}
			}
		],
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				allowArgumentsExplicitlyTypedAsAny: true,
				allowHigherOrderFunctions: true,
				allowTypedFunctionExpressions: true
			}
		],
		'@typescript-eslint/init-declarations': ['error', 'always'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
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
		'@typescript-eslint/method-signature-style': ['error', 'property'],
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-base-to-string': errorIfTypeInfo,
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': ifTypeInfo([
			'error',
			{
				ignoreArrowShorthand: true
			}
		]),
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-duplicate-imports': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': ifTypeInfo([
			'error',
			{
				ignoreVoid: true
			}
		]),
		'@typescript-eslint/no-for-in-array': errorIfTypeInfo,
		'@typescript-eslint/no-implied-eval': errorIfTypeInfo,
		'@typescript-eslint/no-inferrable-types': [
			'error',
			{
				ignoreProperties: true,
				ignoreParameters: true
			}
		],
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-loss-of-precision': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true
			}
		],
		'@typescript-eslint/no-throw-literal': errorIfTypeInfo,
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': errorIfTypeInfo,
		'@typescript-eslint/no-unnecessary-condition': ifTypeInfo([
			'error',
			{
				allowConstantLoopConditions: true
			}
		]),
		'@typescript-eslint/no-unnecessary-qualifier': errorIfTypeInfo,
		'@typescript-eslint/no-unnecessary-type-arguments': errorIfTypeInfo,
		'@typescript-eslint/no-unnecessary-type-assertion': errorIfTypeInfo,
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-assignment': errorIfTypeInfo,
		'@typescript-eslint/no-unsafe-call': errorIfTypeInfo,
		'@typescript-eslint/no-unsafe-member-access': errorIfTypeInfo,
		'@typescript-eslint/no-unsafe-return': errorIfTypeInfo,
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': errorIfTypeInfo,
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': errorIfTypeInfo,
		'@typescript-eslint/prefer-nullish-coalescing': errorIfTypeInfo,
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': errorIfTypeInfo,
		'@typescript-eslint/prefer-reduce-type-parameter': errorIfTypeInfo,
		'@typescript-eslint/prefer-regexp-exec': errorIfTypeInfo,
		'@typescript-eslint/prefer-string-starts-ends-with': errorIfTypeInfo,
		'@typescript-eslint/promise-function-async': errorIfTypeInfo,
		'@typescript-eslint/require-array-sort-compare': errorIfTypeInfo,
		'@typescript-eslint/restrict-plus-operands': errorIfTypeInfo,
		'@typescript-eslint/restrict-template-expressions': errorIfTypeInfo,
		'@typescript-eslint/return-await': ifTypeInfo(['error', 'always']),
		'@typescript-eslint/switch-exhaustiveness-check': errorIfTypeInfo,
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				path: 'never',
				types: 'never',
				lib: 'always'
			}
		],
		'@typescript-eslint/unbound-method': errorIfTypeInfo,
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		'@typescript-eslint/naming-convention': ifTypeInfo([
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
		]),
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
				definedTags: ['inheritDoc', 'expandParams', 'neverExpand', 'hideProtected', 'eventListener']
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
		'no-sequences': 'error',
		'no-sparse-arrays': 'error',
		'no-throw-literal': 'error',
		'no-unexpected-multiline': 'error',
		'no-unneeded-ternary': 'error',
		'no-unsafe-finally': 'error',
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
