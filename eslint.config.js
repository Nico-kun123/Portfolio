import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import deprecate from 'eslint-plugin-deprecate'
// ESLint Plugin Perfectionist
import perfectionist from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css'
import globals from 'globals'

export default [
  // Configs (JS + Vue + Prettier)
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...pluginVue.configs['flat/recommended'],

  // eslint-plugin-perfectionist
  // perfectionist.configs['recommended-alphabetical'],

  // Configs (Vue-ScopedCSS)
  ...eslintPluginVueScopedCSS.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,vue,html}'],
    plugins: {
      deprecate,
      perfectionist,
      'vue-scoped-css': eslintPluginVueScopedCSS,
    },
    rules: {
      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          partitionByComment: true,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-classes': [
        'error',
        {
          order: 'asc',
          partitionByComment: true,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          partitionByComment: true,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          partitionByComment: true,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-variable-declarations': [
        'error',
        {
          order: 'asc',
          partitionByComment: true,
          type: 'alphabetical',
        },
      ],
    },
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      //? СПИСОК ПРАВИЛ: https://github.com/future-architect/eslint-plugin-vue-scoped-css
      'vue-scoped-css/enforce-style-type': 'off', //* Предупреждение о неиспользуемых селекторах в scoped CSS
      'vue-scoped-css/no-parsing-error': 'warn', // Предупреждение о неиспользуемых селекторах в scoped CSS
      'vue-scoped-css/no-unused-keyframes': 'warn', // Предупреждение о неиспользуемых селекторах в scoped CSS
      'vue-scoped-css/no-unused-selector': 'warn', // Предупреждение о неиспользуемых селекторах в scoped CSS

      //? СПИСОК СТАНДАРТНЫХ ПРАВИЛ (ESLint): https://eslint.org/docs/rules/
      //! Possible Problems. These rules relate to possible logic errors in code
      'array-callback-return': 'warn', // Предупреждение при использовании Array.prototype.map
      'no-constructor-return': 'warn', // Предупреждение при использовании new
      'no-duplicate-imports': 'warn', // Предупреждение при повторном импорте
      'no-inner-declarations': 'warn', // Предупреждение при объявлении переменных внутри блока
      'no-promise-executor-return': 'warn', // Предупреждение при использовании Promise executor
      'no-self-compare': 'warn', // Предупреждение при использовании ==
      'no-template-curly-in-string': 'warn', // Предупреждение при использовании ${}
      'no-unmodified-loop-condition': 'warn', // Предупреждение при использовании while
      'no-unreachable-loop': 'warn', // Предупреждение при использовании while
      'no-unused-expressions': 'warn', // Предупреждение о неиспользуемых выражениях
      'no-use-before-define': 'warn', // Предупреждение при использовании define
      'no-useless-assignment': 'off',
      'require-atomic-updates': 'warn',
      //! Suggestions. These rules suggest alternate ways of doing things
      'accessor-pairs': 'warn', // Предупреждение при использовании accessor
      'arrow-body-style': 'warn', // Предупреждение при использовании стрелочной функции
      'block-scoped-var': 'warn', // Предупреждение при объявлении переменных в блоке
      camelcase: 'warn', //* Предупреждение при использовании camelCase
      'capitalized-comments': 'off', //* Предупреждение при использовании комментария в верхнем регистре
      'class-methods-use-this': 'warn', // Предупреждение при использовании this
      complexity: 'warn', // Предупреждение при использовании сложности
      'consistent-return': 'warn', // Предупреждение при использовании return
      'consistent-this': 'warn', // Предупреждение при использовании this
      curly: 'warn', //* Предупреждение при использовании {}
      'default-case': 'warn', // Предупреждение при использовании switch
      'default-case-last': 'warn', // Предупреждение при использовании switch
      'default-param-last': 'warn', // Предупреждение при использовании switch
      'dot-location': 'warn', // Предупреждение при использовании .
      eqeqeq: 'warn', //* Предупреждение при использовании ===
      'func-name-matching': 'warn', // Предупреждение при использовании имени функции
      'func-names': 'warn', // Предупреждение при использовании имени функции
      'func-style': 'warn',
      'grouped-accessor-pairs': 'warn', // Предупреждение при использовании accessor
      'guard-for-in': 'warn', // Предупреждение при использовании guard
      'id-denylist': 'warn',
      'id-length': 'off', //* Начальное id в циклах
      'id-match': 'warn',
      'init-declarations': 'warn', // Предупреждение при объявлении переменных в функции
      'logical-assignment-operators': 'warn', // Предупреждение при использовании логических операторов
      'max-classes-per-file': 'warn', // Предупреждение при использовании максимального количества классов в файле
      'max-depth': 'warn', // Предупреждение при использовании максимальной глубины
      'max-lines': 'off', //* Предупреждение при использовании максимального количества строк
      'max-lines-per-function': 'warn', // Предупреждение при использовании максимального количества строк в функции
      'max-nested-callbacks': 'warn', // Предупреждение при использовании максимального количества вложенных функций
      'max-params': 'warn', // Предупреждение при использовании максимального количества параметров
      'max-statements': 'warn', // Предупреждение при использовании максимального количества выражений
      'new-cap': 'warn', // Предупреждение при использовании new
      'no-alert': 'warn', // Предупреждение при использовании alert
      'no-array-constructor': 'warn', // Предупреждение при использовании Array
      'no-bitwise': 'warn', // Предупреждение при использовании bitwise
      'no-caller': 'warn', // Предупреждение при использовании caller
      'no-case-declarations': 'warn', // Предупреждение при использовании case
      'no-console': 'warn', // Предупреждение при использовании console.log
      'no-continue': 'off', //* Предупреждение при использовании continue
      'no-delete-var': 'warn', // Предупреждение при использовании delete
      'no-div-regex': 'warn', // Предупреждение при использовании div
      'no-else-return': 'warn', // Предупреждение при использовании else
      'no-empty-function': 'warn', // Предупреждение при использовании empty function
      'no-eq-null': 'warn', // Предупреждение при использовании null
      'no-eval': 'warn', // Предупреждение при использовании eval
      'no-extend-native': 'warn', // Предупреждение при использовании extend
      'no-extra-bind': 'warn', // Предупреждение при использовании bind
      'no-extra-boolean-cast': 'warn', // Предупреждение при использовании boolean
      'no-extra-label': 'warn', // Предупреждение при использовании label
      'no-global-assign': 'warn', // Предупреждение при использовании global
      'no-implicit-coercion': 'warn', // Предупреждение при использовании implicit
      'no-implicit-globals': 'warn', // Предупреждение при использовании global
      'no-implied-eval': 'warn', // Предупреждение при использовании eval
      'no-inline-comments': 'off', //* Предупреждение при использовании inline comments
      'no-invalid-this': 'warn', // Предупреждение при использовании this
      'no-iterator': 'warn', // Предупреждение при использовании iterator
      'no-label-var': 'warn', // Предупреждение при использовании label
      'no-labels': 'warn', // Предупреждение при использовании labels
      'no-lone-blocks': 'warn', // Предупреждение при использовании blocks
      'no-loop-func': 'warn', // Предупреждение при использовании loop
      // 'no-magic-numbers': 'warn', // Предупреждение при использовании magic numbers
      'no-multi-assign': 'warn', // Предупреждение при использовании multi
      'no-multi-str': 'warn', // Предупреждение при использовании multi
      'no-negated-condition': 'warn', // Предупреждение при использовании negated
      'no-nested-ternary': 'off', //* Предупреждение при использовании nested
      'no-new': 'warn', // Предупреждение при использовании new
      'no-new-func': 'warn', // Предупреждение при использовании new
      'no-new-wrappers': 'warn', // Предупреждение при использовании new
      'no-object-constructor': 'warn', // Предупреждение при использовании object
      'no-octal': 'warn', // Предупреждение при использовании octal
      'no-octal-escape': 'warn', // Предупреждение при использовании octal
      'no-param-reassign': 'warn', //* Предупреждение при использовании param
      'no-plusplus': 'warn', //* Предупреждение при использовании plus
      'no-proto': 'warn', // Предупреждение при использовании proto
      'no-redeclare': 'warn', // Предупреждение при использовании redeclare
      'no-regex-spaces': 'warn', // Предупреждение при использовании regex
      'no-restricted-exports': 'warn', // Предупреждение при использовании restricted
      'no-restricted-globals': 'warn', // Предупреждение при использовании restricted
      'no-restricted-imports': 'warn', // Предупреждение при использовании restricted
      'no-restricted-properties': 'warn', // Предупреждение при использовании restricted
      'no-restricted-syntax': 'warn', // Предупреждение при использовании restricted
      'no-return-assign': 'warn', // Предупреждение при использовании return
      'no-script-url': 'warn', // Предупреждение при использовании script
      'no-sequences': 'warn', // Предупреждение при использовании sequences
      'no-shadow': 'warn', // Предупреждение при использовании shadow
      'no-ternary': 'off', //* Предупреждение при использовании ternary
      'no-this-before-super': 'warn', // Предупреждение при использовании this
      'no-throw-literal': 'warn', // Предупреждение при использовании throw
      'no-undef-init': 'warn', // Предупреждение при использовании init
      'no-undefined': 'warn', // Предупреждение при использовании undefined
      'no-underscore-dangle': 'warn', // Предупреждение при использовании underscore
      'no-unneeded-ternary': 'warn', // Предупреждение при использовании ternary
      // 'no-unused-expressions': 'warn', //* Предупреждение при использовании expressions
      'no-useless-call': 'warn', // Предупреждение при использовании call
      'no-useless-computed-key': 'warn', // Предупреждение при использовании computed
      'no-useless-concat': 'warn', // Предупреждение при использовании concat
      'no-useless-constructor': 'warn', // Предупреждение при использовании constructor
      'no-useless-rename': 'warn', // Предупреждение при использовании rename
      'no-useless-return': 'warn', // Предупреждение при использовании return
      'no-var': 'warn', // Предупреждение при использовании var
      'no-void': 'warn', // Предупреждение при использовании void
      'no-warning-comments': 'warn', //* Предупреждение при использовании comments (Например, TODO)
      'object-shorthand': 'warn', // Предупреждение при использовании shorthand
      'one-var': 'off', //* Предупреждение при использовании one
      'operator-assignment': 'warn', // Предупреждение при использовании assignment
      'prefer-arrow-callback': 'warn', // Предупреждение при использовании arrow
      'prefer-const': 'warn', // Предупреждение при использовании const
      'prefer-destructuring': 'warn', // Предупреждение при использовании destructuring
      'prefer-exponentiation-operator': 'warn', // Предупреждение при использовании exponentiation
      'prefer-named-capture-group': 'warn', // Предупреждение при использовании named
      'prefer-numeric-literals': 'warn', // Предупреждение при использовании numeric
      'prefer-object-has-own': 'warn', // Предупреждение при использовании hasOwn
      'prefer-promise-reject-errors': 'warn', // Предупреждение при использовании promise
      'prefer-regex-literals': 'warn', // Предупреждение при использовании regex
      'prefer-rest-params': 'warn', // Предупреждение при использовании params
      'prefer-spread': 'warn', // Предупреждение при использовании spread
      'prefer-template': 'warn', // Предупреждение при использовании template
      radix: 'warn', // Предупреждение при использовании radix
      'require-await': 'warn', // Предупреждение при использовании await
      'require-unicode-regexp': 'warn', // Предупреждение при использовании unicode
      'sort-imports': 'off', //* Предупреждение при использовании sort
      'sort-keys': 'off', //* Предупреждение при использовании sort
      'sort-vars': 'off', //* Предупреждение при использовании sort
      strict: 'warn', // Предупреждение при использовании strict
      'symbol-description': 'warn', // Предупреждение при использовании symbol
      'vars-on-top': 'warn', // Предупреждение при использовании vars
      yoda: 'warn', // Предупреждение при использовании yoda

      //? СПИСОК ПРАВИЛ (Vue): https://eslint.vuejs.org/rules/
      //* ⚠️ Possible Problems: These rules relate to possible logic errors in code.
      //! Priority A: Essential (Error Prevention)
      'vue/comment-directive': 'error', // Предупреждение при использовании комментария в vue
      'vue/jsx-uses-vars': 'error', // Предупреждение при использовании переменных в JSX
      'vue/no-arrow-functions-in-watch': 'error', // Предупреждение о использовании стрелочных функций в watch
      'vue/no-async-in-computed-properties': 'error', // Предупреждение о использовании асинхронных вычислений в computed
      'vue/no-child-content': 'error', // Предупреждение о использовании дочерних контейнеров в компонентах
      'vue/no-computed-properties-in-data': 'error', // Предупреждение о использовании вычислений в data
      'vue/no-custom-modifiers-on-v-model': 'error', // Предупреждение о использовании модификаторов в v-model
      'vue/no-deprecated-data-object-declaration': 'error', // Предупреждение о использовании устаревшего объявления data
      'vue/no-deprecated-destroyed-lifecycle': 'error', // Предупреждение о использовании устаревшего метода destroyed
      'vue/no-deprecated-dollar-listeners-api': 'error', // Предупреждение о использовании устаревшего API $listeners
      'vue/no-deprecated-dollar-scopedslots-api': 'error', // Предупреждение о использовании устаревшего API $scopedSlots
      'vue/no-deprecated-events-api': 'error', // Предупреждение о использовании устаревшего API $on
      'vue/no-deprecated-filter': 'error', // Предупреждение о использовании устаревшего filtered
      'vue/no-deprecated-functional-template': 'error', // Предупреждение о использовании устаревшего функционального шаблона
      'vue/no-deprecated-html-element-is': 'error', // Предупреждение о использовании устаревшего API $is
      'vue/no-deprecated-inline-template': 'error', // Предупреждение о использовании устаревшего inline шаблона
      'vue/no-deprecated-props-default-this': 'error', // Предупреждение о использовании устаревшего this в props
      'vue/no-deprecated-router-link-tag-prop': 'error', // Предупреждение о использовании устаревшего router-link-tag-props
      'vue/no-deprecated-v-bind-sync': 'error', // Предупреждение о использовании устаревшего v-bind.sync
      'vue/no-deprecated-v-on-native-modifier': 'error', // Предупреждение о использовании устаревших модификаторов в v-on
      'vue/no-deprecated-v-on-number-modifiers': 'error', // Предупреждение о использовании устаревших модификаторов в v-on
      'vue/no-deprecated-vue-config-keycodes': 'error', // Предупреждение о использовании устаревших кодов клавиш в vue.config.js
      'vue/no-dupe-keys': 'error', // Предупреждение о использовании дублирующихся ключей
      'vue/no-dupe-v-else-if': 'error', // Предупреждение о использовании дублирующихся v-else-if
      'vue/no-duplicate-attributes': 'error', // Предупреждение о использовании дублирующихся атрибутов
      'vue/no-export-in-script-setup': 'error', // Предупреждение о использовании экспорта в setup
      'vue/no-expose-after-await': 'error', // Предупреждение о использовании expose после await
      'vue/no-multiple-template-root': 'error', // Предупреждение о использовании нескольких корневых элементов
      'vue/no-parsing-error': 'error', // Предупреждение о неиспользуемых селекторах в scoped CSS
      'vue/no-reserved-props': 'error', // Предупреждение о использовании зарезервированных свойств
      'vue/no-shared-component-data': 'error', // Предупреждение о использовании общих данных компонентов
      'vue/no-side-effects-in-computed-properties': 'error', // Предупреждение о использовании вычислений в computed
      'vue/no-template-key': 'error', // Предупреждение о использовании ключей в шаблоне
      'vue/no-textarea-mustache': 'error', // Предупреждение о использовании textarea в шаблоне
      'vue/no-use-computed-property-like-method': 'error', // Предупреждение о использовании вычислений в computed
      'vue/no-useless-template-attributes': 'error', // Предупреждение о использовании лишних атрибутов в шаблоне
      'vue/no-v-for-template-key': 'error', // Предупреждение о использовании ключей в шаблоне
      'vue/no-v-for-template-key-on-child': 'error', // Предупреждение о использовании ключей в шаблоне внутри дочерних элементов
      'vue/no-v-model-argument': 'error', // Предупреждение о использовании аргумента v-model
      'vue/no-v-text-v-html-on-component': 'error', // Предупреждение о использовании v-text или v-html внутри компонента
      'vue/require-component-is': 'error', // Предупреждение о необходимости использования компонента is
      'vue/require-render-return': 'error', // Предупреждение о необходимости использования renderReturn
      'vue/require-slots-as-functions': 'error', // Предупреждение о необходимости использования слотов как функций
      'vue/require-toggle-inside-transition': 'error', // Предупреждение о необходимости использования toggle внутри transition
      'vue/require-v-for-key': 'error', // Предупреждение о необходимости использования v-for с ключей
      'vue/return-in-computed-property': 'error', // Предупреждение о использовании return в computed
      'vue/return-in-emits-validator': 'error', // Предупреждение о использовании return в emits
      'vue/valid-attribute-name': 'error', // Предупреждение о недопустимых атрибутах
      'vue/valid-define-emits': 'error', // Предупреждение о недопустимых emits
      'vue/valid-define-props': 'error', // Предупреждение о недопустимых props
      'vue/valid-model-definition': 'error', // Предупреждение о недопустимых model
      'vue/valid-next-tick': 'error', // Предупреждение о недопустимых nextTick
      'vue/valid-template-root': 'error', // Предупреждение о недопустимых корневых элементах
      'vue/valid-v-bind': 'error', // Предупреждение о недопустимых v-bind
      'vue/valid-v-bind-sync': 'error', // Предупреждение о недопустимых v-bind.sync
      'vue/valid-v-cloak': 'error', // Предупреждение о недопустимых v-cloak
      'vue/valid-v-else': 'error', // Предупреждение о недопустимых v-else
      'vue/valid-v-else-if': 'error', // Предупреждение о недопустимых v-else-if
      'vue/valid-v-for': 'error', // Предупреждение о недопустимых v-for
      'vue/valid-v-html': 'error', // Предупреждение о недопустимых v-html
      'vue/valid-v-if': 'error', // Предупреждение о недопустимых v-if
      'vue/valid-v-is': 'error', // Предупреждение о недопустимых v-is
      'vue/valid-v-memo': 'error', // Предупреждение о недопустимых v-memo
      'vue/valid-v-model': 'error', // Предупреждение о недопустимых v-model
      'vue/valid-v-on': 'error', // Предупреждение о недопустимых v-on
      'vue/valid-v-once': 'error', // Предупреждение о недопустимых v-once
      'vue/valid-v-pre': 'error', // Предупреждение о недопустимых v-pre
      'vue/valid-v-show': 'error', // Предупреждение о недопустимых v-show
      'vue/valid-v-slot': 'error', // Предупреждение о недопустимых v-slot
      'vue/valid-v-text': 'error', // Предупреждение о недопустимых v-text
      //! Priority C: Recommended (Potentially Dangerous Patterns)
      'vue/no-lone-template': 'warn', // Предупреждение о использовании одиночных шаблонов
      'vue/no-multiple-slot-args': 'warn', // Предупреждение о использовании нескольких аргументов слота
      //! 😐Uncategorized. No preset enables the rules in this category. Please enable each rule if you want.
      'vue/match-component-import-name': 'error', // Предупреждение о недопустимых имён компонентов
      'vue/max-lines-per-block': 'error', // Предупреждение о недопустимом количестве строк в блоке
      'vue/no-deprecated-model-definition': 'error', // Предупреждение о использовании устаревшего model
      'vue/no-ref-object-reactivity-loss': 'error', // Предупреждение о использовании ref объекта в реактивной потере
      'vue/no-required-prop-with-default': 'error', // Предупреждение о использовании обязательного prop с дефолтным значением
      'vue/no-restricted-class': 'error', // Предупреждение о использовании запрещенного класса
      'vue/no-template-target-blank': 'error', // Предупреждение о использовании недопустимого target в template
      'vue/no-this-in-before-route-enter': 'error', // Предупреждение о использовании this в beforeRouteEnter
      'vue/prefer-prop-type-boolean-first': 'error', // Предупреждение о использовании типа boolean в первом аргументе prop
      'vue/require-explicit-slots': 'error', // Предупреждение о необъявленных слотах
      'vue/v-if-else-key': 'error', // Предупреждение о использовании v-if-else-key
      'vue/valid-define-options': 'error', // Предупреждение о недопустимых defineOptions
      //! Extension Rules. The following rules extend the rules provided by ESLint itself and apply them to the expressions in the <template>.
      'vue/no-constant-condition': 'error',
      'vue/no-empty-pattern': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/no-loss-of-precision': 'error',
      'vue/no-sparse-arrays': 'error',

      //* 🔨 Suggestions: These rules suggest alternate ways of doing things.
      //! Priority A: Essential (Error Prevention)
      'vue/multi-word-component-names': 'error', // Требование многословных имён компонентов Vue
      'vue/no-deprecated-scope-attribute': 'error', // Предупреждение о использовании устаревшего scope
      'vue/no-deprecated-slot-attribute': 'error', // Предупреждение о использовании устаревшего slot
      'vue/no-deprecated-slot-scope-attribute': 'error', // Предупреждение о использовании устаревшего slot-scope
      'vue/no-deprecated-v-is': 'error', // Предупреждение о использовании устаревшего v-is
      'vue/no-lifecycle-after-await': 'error', // Предупреждение о использовании lifecycle после await
      'vue/no-mutating-props': 'error', // Предупреждение о использовании мутации props
      'vue/no-ref-as-operand': 'error', // Предупреждение о использовании ref как операнда
      'vue/no-reserved-component-names': 'error', // Предупреждение о использовании зарезервированных имен компонентов
      'vue/no-reserved-keys': 'error', // Предупреждение о использовании зарезервированных ключей
      'vue/no-unused-components': 'error', // Предупреждение о неиспользуемых компонентах
      'vue/no-unused-vars': 'error', // Предупреждение о неиспользуемых переменных в Vue
      'vue/no-use-v-if-with-v-for': 'error', // Предупреждение о использовании v-if с v-for
      'vue/no-watch-after-await': 'error', // Предупреждение о использовании watch после await
      'vue/prefer-import-from-vue': 'error', // Предупреждение о использовании импорта из Vue
      'vue/require-prop-type-constructor': 'error', // Предупреждение о необходимости использования конструктора propTypes
      'vue/require-valid-default-prop': 'error', // Предупреждение о необходимости использования дефолтных значений props
      'vue/use-v-on-exact': 'error', // Предупреждение о использовании v-on в точности
      //! Priority B: Strongly Recommended (Improving Readability)
      'vue/attribute-hyphenation': 'warn', // Предупреждение о использовании атрибутов с дефисами
      'vue/component-definition-name-casing': 'warn', // Предупреждение о неправильном названии компонентов
      'vue/html-end-tags': 'warn', // Предупреждение о отсутствии закрывающихся тегов
      'vue/no-template-shadow': 'warn', // Предупреждение о неправильном использовании тега shadow
      'vue/one-component-per-file': 'warn', // Предупреждение о использовании одного компонента в файле
      'vue/prop-name-casing': 'warn', // Предупреждение о неправильном названии props
      'vue/require-default-prop': 'warn', // Предупреждение о необходимости использования дефолтных значений props
      'vue/require-explicit-emits': 'warn', // Предупреждение о необходимости использования explicit emits
      'vue/require-prop-types': 'warn', // Предупреждение о необходимости использования propTypes
      'vue/v-bind-style': 'warn', // Предупреждение о неправильном использовании v-bind
      'vue/v-on-event-hyphenation': 'warn', // Предупреждение о неправильном использовании v-on с дефисами
      'vue/v-on-style': 'warn', // Предупреждение о неправильном использовании v-on
      'vue/v-slot-style': 'warn', // Предупреждение о неправильном использовании v-slot
      //! Priority C: Recommended (Potentially Dangerous Patterns)
      'vue/attributes-order': 'warn', // Предупреждение о неправильном порядке атрибутов
      'vue/component-tags-order': 'warn', // Предупреждение о неправильном порядке тегов компонентов
      'vue/no-v-html': 'warn', // Предупреждение о использовании v-html
      'vue/order-in-components': 'warn', // Предупреждение о неправильном порядке компонентов
      'vue/this-in-template': 'warn', // Предупреждение о использовании this в шаблоне
      //! 😐Uncategorized. No preset enables the rules in this category. Please enable each rule if you want.
      'vue/block-lang': 'off', //* Предупреждение о неправильном использовании языка в блоке
      'vue/block-order': 'error', // Предупреждение о неправильном порядке блоков
      'vue/component-api-style': 'error', // Предупреждение о неправильном использовании API компонентов
      'vue/component-name-in-template-casing': 'error', // Предупреждение о неправильном названии компонентов
      'vue/component-options-name-casing': 'error', // Предупреждение о неправильном названии компонентов
      'vue/custom-event-name-casing': 'error', // Предупреждение о неправильном названии событий
      'vue/define-emits-declaration': 'error', // Предупреждение о неправильном использовании emits
      'vue/define-props-declaration': 'error', // Предупреждение о неправильном использовании props
      'vue/enforce-style-attribute': 'off', //* Предупреждение о неправильном использовании атрибута style
      'vue/html-button-has-type': 'error', // Предупреждение о неправильном использовании типа в кнопке
      'vue/match-component-file-name': 'error', // Предупреждение о неправильном названии компонентов
      'vue/next-tick-style': 'error', // Предупреждение о неправильном использовании nextTick
      'vue/no-bare-strings-in-template': 'warn', //* Предупреждение о неправильном использовании строк в шаблоне
      'vue/no-boolean-default': 'error', // Предупреждение о неправильном использовании дефолтного значения
      'vue/no-duplicate-attr-inheritance': 'error', // Предупреждение о неправильном использовании дублирующего атрибута наследования
      'vue/no-empty-component-block': 'error', // Предупреждение о неправильном использовании пустого блока компонента
      'vue/no-multiple-objects-in-class': 'error', // Предупреждение о неправильном использовании нескольких объектов в классе
      'vue/no-potential-component-option-typo': 'error', // Предупреждение о неправильном использовании опции компонента
      'vue/no-restricted-block': 'error', // Предупреждение о неправильном использовании запрещенного блока
      'vue/no-restricted-call-after-await': 'error', // Предупреждение о неправильном использовании запрещенного вызова после await
      'vue/no-restricted-component-names': 'error', // Предупреждение о неправильном использовании запрещенных названий компонентов
      'vue/no-restricted-component-options': 'error', // Предупреждение о неправильном использовании запрещенных опции компонентов
      'vue/no-restricted-custom-event': 'error', // Предупреждение о неправильном использовании запрещенного события
      'vue/no-restricted-html-elements': 'error', // Предупреждение о неправильном использовании запрещенных HTML элементов
      'vue/no-restricted-props': 'error', // Предупреждение о неправильном использовании запрещенных атрибутов
      'vue/no-restricted-static-attribute': 'error', // Предупреждение о неправильном использовании запрещенных статических атрибутов
      'vue/no-restricted-v-bind': 'error', // Предупреждение о неправильном использовании запрещенного v-bind
      'vue/no-restricted-v-on': 'error', // Предупреждение о неправильном использовании запрещенного v-on
      'vue/no-root-v-if': 'error', // Предупреждение о неправильном использовании root v-if
      'vue/no-setup-props-reactivity-loss': 'warn', //* Предупреждение о неправильном использовании reactivity loss в props
      'vue/no-static-inline-styles': 'error', // Предупреждение о неправильном использовании статических inline стилей
      'vue/no-undef-components': 'error', // Предупреждение о неправильном использовании неопределенных компонентов
      'vue/no-undef-properties': 'error', // Предупреждение о неправильном использовании неопределенных свойств
      'vue/no-unsupported-features': 'error', // Предупреждение о неправильном использовании не поддерживаемых функций
      'vue/no-unused-emit-declarations': 'error', // Предупреждение о неправильном использовании неиспользуемых emit-деклараци
      'vue/no-unused-properties': 'error', // Предупреждение о неправильном использовании неиспользуемых свойств
      'vue/no-unused-refs': 'error', // Предупреждение о неправильном использовании неиспользуемых ссылок
      'vue/no-use-v-else-with-v-for': 'error', // Предупреждение о неправильном использовании v-else с v-for
      'vue/no-useless-mustaches': 'error', // Предупреждение о неправильном использовании mustaches
      'vue/no-useless-v-bind': 'error', // Предупреждение о неправильном использовании v-bind
      'vue/no-v-text': 'error', // Предупреждение о неправильном использовании textarea
      'vue/prefer-define-options': 'error', // Предупреждение о неправильном использовании defineOptions
      'vue/prefer-separate-static-class': 'error', // Предупреждение о неправильном использовании separateStaticClass
      'vue/prefer-true-attribute-shorthand': 'error', // Предупреждение о неправильном использовании trueShorthand
      'vue/require-direct-export': 'error', // Предупреждение о неправильном использовании requireDirectExport
      'vue/require-emit-validator': 'error', // Предупреждение о неправильном использовании requireEmitValidator
      'vue/require-expose': 'off', //* Предупреждение о неправильном использовании requireExpose
      'vue/require-macro-variable-name': 'error', // Предупреждение о неправильном использовании requireMacroVariableName
      'vue/require-name-property': 'error', // Предупреждение о неправильном использовании requireNameProperty
      'vue/require-prop-comment': 'error', // Предупреждение о неправильном использовании requirePropComment
      'vue/require-typed-object-prop': 'error', // Предупреждение о неправильном использовании requireTypedObjectProp
      'vue/require-typed-ref': 'error', // Предупреждение о неправильном использовании requireTypedRef
      'vue/sort-keys': 'off', //* Предупреждение о неправильном использовании sortKeys
      'vue/static-class-names-order': 'error', // Предупреждение о неправильном использовании staticClassNamesOrder
      'vue/v-on-handler-style': 'off', //* Предупреждение о неправильном использовании v-onHandlerStyle
      //! Extension Rules. The following rules extend the rules provided by ESLint itself and apply them to the expressions in the <template>.
      'vue/camelcase': 'error', // Предупреждение о неправильном использовании camelCase
      'vue/dot-notation': 'error', // Предупреждение о неправильном использовании dot notation
      'vue/eqeqeq': 'error', // Предупреждение о неправильном использовании eqeqeq
      'vue/no-console': 'error', // Предупреждение о неправильном использовании console
      'vue/no-restricted-syntax': 'error', // Предупреждение о неправильном использовании restrictedSyntax
      'vue/no-useless-concat': 'error', // Предупреждение о неправильном использовании uselessConcat
      'vue/object-shorthand': 'error', // Предупреждение о неправильном использовании objectShorthand
      'vue/prefer-template': 'error', // Предупреждение о неправильном использовании preferTemplate

      //* 💄 Layout & Formatting: These rules care about how the code looks rather than how it executes.
      //! Priority B: Strongly Recommended (Improving Readability)
      // 'vue/first-attribute-linebreak': 'warn', // Предупреждение о разрыве первого атрибута
      'vue/html-closing-bracket-newline': 'off', // Предупреждение о разрыве закрывающегося квадратного скобочного элемента
      'vue/html-closing-bracket-spacing': 'off', // Предупреждение о разрыве закрывающегося квадратного скобочного элемента
      'vue/html-indent': 'off', // Предупреждение о неправильном отступе в HTML
      'vue/html-quotes': 'warn', // Предупреждение о неправильном использовании кавычек в HTML
      'vue/html-self-closing': 'off', // Предупреждение о неправильном использовании self-closing тегов в HTML
      'vue/max-attributes-per-line': 'off', // Предупреждение о переносе атрибутов
      // 'vue/multiline-html-element-content-newline': 'warn', // Предупреждение о переносе содержимого HTML элементов
      // 'vue/mustache-interpolation-spacing': 'warn', // Предупреждение о неправильном использовании интерполяции в.mustache
      // 'vue/no-multi-spaces': 'warn', // Предупреждение о использовании нескольких пробелов
      // 'vue/no-spaces-around-equal-signs-in-attribute': 'warn', // Предупреждение о использовании пробелов в атрибутах
      'vue/singleline-html-element-content-newline': 'off', // Предупреждение о переносе содержимого HTML элементов
      //! 😐Uncategorized. No preset enables the rules in this category. Please enable each rule if you want.
      // 'vue/block-tag-newline': 'warn', // Предупреждение о неправильном использовании блоков в тегах
      // 'vue/define-macros-order': 'warn', // Предупреждение о неправильном порядке макросов
      // 'vue/html-comment-content-newline': 'warn',
      // 'vue/html-comment-content-spacing': 'warn',
      // 'vue/html-comment-indent': 'warn',
      // 'vue/new-line-between-multi-line-property': 'off', //*
      // 'vue/padding-line-between-blocks': 'off', //*
      // 'vue/padding-line-between-tags': 'off', //*
      // 'vue/padding-lines-in-component-definition': 'off', //*
      // 'vue/script-indent': 'off', //*
      // 'vue/v-for-delimiter-style': 'warn',
      //! Extension Rules. The following rules extend the rules provided by ESLint itself and apply them to the expressions in the <template>.
      // 'vue/array-bracket-newline': 'error',
      // 'vue/array-bracket-spacing': 'error',
      // 'vue/array-element-newline': 'error',
      // 'vue/arrow-spacing': 'error',
      // 'vue/block-spacing': 'error',
      // 'vue/brace-style': 'error',
      // 'vue/comma-dangle': 'error',
      // 'vue/comma-spacing': 'error',
      // 'vue/comma-style': 'error',
      // 'vue/dot-location': 'error',
      // 'vue/func-call-spacing': 'error',
      // 'vue/key-spacing': 'error',
      // 'vue/keyword-spacing': 'error',
      // 'vue/max-len': 'off', //* Максимальная длина строки кода
      // 'vue/multiline-ternary': 'error',
      // 'vue/no-extra-parens': 'error',
      // 'vue/object-curly-newline': 'error',
      // 'vue/object-curly-spacing': 'error',
      // 'vue/object-property-newline': 'error',
      // 'vue/operator-linebreak': 'error',
      // 'vue/quote-props': 'error',
      // 'vue/space-in-parens': 'error',
      // 'vue/space-infix-ops': 'error',
      // 'vue/space-unary-ops': 'error',
      // 'vue/template-curly-spacing': 'error',
    },
  },
]
