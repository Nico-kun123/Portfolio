import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import deprecate from 'eslint-plugin-deprecate'
// import perfectionist from 'eslint-plugin-perfectionist'
import globals from 'globals'

// Typescript
// import tseslint from 'typescript-eslint';

// Vue
import pluginVue from 'eslint-plugin-vue'
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import vueParser from 'vue-eslint-parser'

// Other
import importPlugin from 'eslint-plugin-import'
import securityPlugin from 'eslint-plugin-security'
import unicorn from 'eslint-plugin-unicorn'
import promisePlugin from 'eslint-plugin-promise'
import noSecrets from 'eslint-plugin-no-secrets'

export default [
  //! Исключения (глобально)
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      '*.config.js',
      'package.json',
      'package-lock.json',
    ],
  },

  //! Рекомендуемые конфигурации

  // Основные
  pluginJs.configs.recommended,
  perfectionist.configs['recommended-alphabetical'],

  // Typescript
  // ...tseslint.configs.recommended,

  // Vue
  // ...pluginVue.configs['flat/recommended'],
  ...eslintPluginVueScopedCSS.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],

  //! Пользовательские конфигурации
  {
    // Шаблоны файлов
    files: ['**/*.{js,mjs,cjs,html,ts,tsx,jsx,tsx,vue}'],

    // Парсинг
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module',

      parser: vueParser, // Для Vue
      parserOptions: {
        // parser: tseslint.parser, // Парсер для TS внутри Vue и отдельно
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
      },

      globals: {
        ...globals.browser,
        ...globals.node, // Для Node.js
        window: 'readonly',
        process: 'writable',
      },
    },

    // Плагины
    plugins: {
      import: importPlugin,
      security: securityPlugin,
      unicorn: unicorn,
      promise: promisePlugin,
      deprecate: deprecate,
      'no-secrets': noSecrets,

      // Vue
      'vue-scoped-css': eslintPluginVueScopedCSS,
      'vuejs-accessibility': pluginVueA11y,
    },

    // Общие настройки для плагинов
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    rules: {
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //    ОСНОВНЫЕ ПРАВИЛА
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //! Possible Problems
      'array-callback-return': 'warn',
      'no-constructor-return': 'warn',
      'no-duplicate-imports': 'warn',
      'no-inner-declarations': 'warn',
      'no-unused-expressions': 'warn',
      'no-promise-executor-return': 'warn',
      'no-self-compare': 'warn',
      'no-template-curly-in-string': 'warn',
      'no-unmodified-loop-condition': 'warn',
      'no-unreachable-loop': 'warn',
      'no-use-before-define': 'warn',
      'no-useless-assignment': 'off',
      'require-atomic-updates': 'warn',

      //! Suggestions
      'accessor-pairs': 'warn',
      'arrow-body-style': 'warn',
      'block-scoped-var': 'warn',
      camelcase: 'warn',
      'capitalized-comments': 'off',
      'class-methods-use-this': 'warn',
      complexity: 'warn',
      'consistent-return': 'warn',
      'consistent-this': 'warn',
      curly: 'warn',
      'default-case': 'warn',
      'default-case-last': 'warn',
      'default-param-last': 'warn',
      'dot-location': 'warn',
      eqeqeq: 'warn',
      'func-name-matching': 'warn',
      'func-names': 'warn',
      'func-style': 'warn',
      'grouped-accessor-pairs': 'warn',
      'guard-for-in': 'warn',
      'id-denylist': 'warn',
      'id-length': 'off',
      'id-match': 'warn',
      'init-declarations': 'warn',
      'logical-assignment-operators': 'warn',
      'max-classes-per-file': 'warn',
      'max-depth': 'warn',
      'max-lines': 'off',
      'max-lines-per-function': 'warn',
      'max-nested-callbacks': 'warn',
      'max-params': 'warn',
      'max-statements': 'warn',
      'new-cap': 'warn',
      'no-alert': 'warn',
      'no-array-constructor': 'warn',
      'no-bitwise': 'warn',
      'no-caller': 'warn',
      'no-case-declarations': 'warn',
      'no-console': 'warn',
      'no-continue': 'off',
      'no-delete-var': 'warn',
      'no-div-regex': 'warn',
      'no-else-return': 'warn',
      'no-empty-function': 'warn',
      'no-eq-null': 'warn',
      'no-eval': 'warn',
      'no-extend-native': 'warn',
      'no-extra-bind': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-extra-label': 'warn',
      'no-global-assign': 'warn',
      'no-implicit-coercion': 'warn',
      'no-implicit-globals': 'warn',
      'no-implied-eval': 'warn',
      'no-inline-comments': 'off',
      'no-invalid-this': 'warn',
      'no-iterator': 'warn',
      'no-label-var': 'warn',
      'no-labels': 'warn',
      'no-lone-blocks': 'warn',
      'no-loop-func': 'warn',
      'no-magic-numbers': 'warn',
      'no-multi-assign': 'warn',
      'no-multi-str': 'warn',
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'off',
      'no-new': 'warn',
      'no-new-func': 'warn',
      'no-new-wrappers': 'warn',
      'no-object-constructor': 'warn',
      'no-octal': 'warn',
      'no-octal-escape': 'warn',
      'no-param-reassign': 'warn',
      'no-plusplus': 'warn',
      'no-proto': 'warn',
      'no-redeclare': 'warn',
      'no-regex-spaces': 'warn',
      'no-restricted-exports': 'warn',
      'no-restricted-globals': 'warn',
      'no-restricted-imports': 'warn',
      'no-restricted-properties': 'warn',
      'no-restricted-syntax': 'warn',
      'no-return-assign': 'warn',
      'no-script-url': 'warn',
      'no-sequences': 'warn',
      'no-shadow': 'warn',
      'no-ternary': 'off',
      'no-this-before-super': 'warn',
      'no-throw-literal': 'warn',
      'no-undef-init': 'warn',
      'no-undefined': 'warn',
      'no-underscore-dangle': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-useless-call': 'warn',
      'no-useless-computed-key': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'warn',
      'no-void': 'warn',
      'no-warning-comments': 'warn',
      'object-shorthand': 'warn',
      'one-var': 'off',
      'operator-assignment': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-exponentiation-operator': 'warn',
      'prefer-named-capture-group': 'warn',
      'prefer-numeric-literals': 'warn',
      'prefer-object-has-own': 'warn',
      'prefer-promise-reject-errors': 'warn',
      'prefer-regex-literals': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      radix: 'warn',
      'require-await': 'warn',
      'require-unicode-regexp': 'warn',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      strict: 'warn',
      'symbol-description': 'warn',
      'vars-on-top': 'warn',
      yoda: 'warn',

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //    TYPESCRIPT
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //! Если Typescript используется
      // 'no-unused-vars': 'off', // Отключаем стандартный
      // '@typescript-eslint/no-unused-vars': ['warn'], // Используем TS-версию

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //    VUE
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //! Дополнительные правила из vue-scoped-css
      'vue-scoped-css/enforce-style-type': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue-scoped-css/no-unused-selector': 'warn',
      'vue-scoped-css/no-parsing-error': 'warn',
      'vue-scoped-css/no-unused-keyframes': 'warn',

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //    REACT
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      // React
      // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //    ПРАВИЛА ДРУГИХ ПЛАГИНОВ
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      // Perfectionist
      'perfectionist/sort-array-includes': [
        'error',
        { order: 'asc', partitionByComment: true, type: 'alphabetical' },
      ],
      'perfectionist/sort-classes': [
        'error',
        { order: 'asc', partitionByComment: true, type: 'alphabetical' },
      ],
      'perfectionist/sort-imports': [
        'error',
        { order: 'asc', partitionByComment: true, type: 'alphabetical' },
      ],
      'perfectionist/sort-objects': [
        'error',
        { order: 'asc', partitionByComment: true, type: 'alphabetical' },
      ],
      'perfectionist/sort-variable-declarations': [
        'error',
        { order: 'asc', partitionByComment: true, type: 'alphabetical' },
      ],
    },
  },

  //! Prettier (всегда в конце: отключает конфликты с другими правилами)
  eslintConfigPrettier,
]
