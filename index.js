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
		'@typescript-eslint/consistent-type-exports': ifTypeInfo([
			'error',
			{
				fixMixedExportsWithInlineTypeSpecifier: true
			}
		]),
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
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
			},
			{
				selector: 'import',
				format: ['strictCamelCase', 'StrictPascalCase']
			}
		]),
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
		'@typescript-eslint/require-array-sort-compare': ifTypeInfo(['error', { ignoreStringArrays: true }]),
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
		'array-callback-return': ['error', { checkForEach: true }],
		'consistent-return': 'error',
		'constructor-super': 'error',
		curly: ['error', 'all'],
		'default-case': 'error',
		'default-case-last': 'error',
		// not a thing right now
		// 'deprecation': 'error',
		'dot-notation': 'error',
		eqeqeq: [
			'error',
			'always',
			{
				null: 'ignore'
			}
		],
		'eol-last': ['error', 'always'],
		'for-direction': 'error',
		'fp/no-delete': 'error',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'getter-return': 'error',
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'import/no-duplicates': ['error', { 'prefer-inline': true }],
		'import/no-unassigned-import': 'error',
		'jsdoc/check-alignment': 'error',
		'jsdoc/check-indentation': 'error',
		'jsdoc/check-param-names': 'error',
		'jsdoc/require-param': [
			'error',
			{
				exemptedBy: ['inheritDoc', 'private', 'internal']
			}
		],
		'jsdoc/check-tag-names': [
			'error',
			{
				definedTags: [
					'inheritDoc',
					'expandParams',
					'neverExpand',
					'hideProtected',
					'eventListener',
					'meta',
					'beta'
				]
			}
		],
		'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
		'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
		'max-classes-per-file': ['error', 1],
		'no-alert': 'error',
		'no-async-promise-executor': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-constructor-return': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-empty-static-block': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-ex-assign': 'error',
		'no-fallthrough': [
			'error',
			{
				commentPattern: 'fallthrough'
			}
		],
		'no-func-assign': 'error',
		'no-implicit-globals': 'error',
		'no-import-assign': 'error',
		'no-irregular-whitespace': 'error',
		'no-labels': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-negated-condition': 'error',
		'no-new': 'error',
		'no-new-wrappers': 'error',
		'no-obj-calls': 'error',
		'no-object-constructor': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-syntax': ['error', 'ForInStatement'],
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-throw-literal': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-private-class-members': 'error',
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-with': 'error',
		'object-shorthand': 'error',
		'operator-assignment': 'error',
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
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		quotes: ['error', 'single', { avoidEscape: true }],
		radix: ['error', 'always'],
		'require-atomic-updates': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['*', '/']
			}
		],
		'symbol-description': 'error',
		'use-isnan': 'error',
		yoda: ['error', 'never']
	}
};
