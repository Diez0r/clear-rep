module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'object-shorthand': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 0,
        alignAttributesVertically: true,
      },
    ],
    'comma-dangle': ['error', {
      arrays: 'ignore',
      objects: 'ignore',
      imports: 'ignore',
      exports: 'ignore',
      functions: 'ignore'
    }],
    allowElseIf: 0,
    'global-require': 0,
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'vue/no-template-shadow': 'error',
    'vue/no-v-html': 'off',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-name-property': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'vue/v-on-function-call': 'error',
    'vue/no-reserved-component-names': 'error',
    'no-use-before-define': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-static-inline-styles': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lines-between-class-members': 'off',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'prefer-template': 'off',
    'require-await': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'vue/script-indent': 'off',
    'max-len': ['error', { code: 150, ignorePattern: 'd="([\\s\\S]*?)"', ignoreStrings: true }],
    'no-empty-function': 'error',
    camelcase: 'off',
    'no-return-assign': 'off',
    'vue/eslint-indent': 'off',
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }],
    'import/extensions': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-destructuring': 'off',
    semi: [2, 'always'],
  },

  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
};
