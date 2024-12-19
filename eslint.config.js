import js from '@eslint/js'
import pluginVue, { rules } from 'eslint-plugin-vue'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    rules: [
      'vue/multi-word-component-names'
    ]
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
]
