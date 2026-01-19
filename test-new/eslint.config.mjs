// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off', // 允许装饰器调用
      '@typescript-eslint/no-unsafe-member-access': 'off', // 允许不安全的成员访问
      'no-console': 'off', // 允许使用 console.log
      'no-multiple-empty-lines': 'off', // 允许多个空行
      'no-trailing-spaces': 'off', // 允许行尾空格
      'eol-last': 'off', // 不强制文件末尾换行
      'indent': 'off', // 关闭缩进检查
      'comma-dangle': 'off', // 关闭尾随逗号检查
      'semi': 'off', // 关闭分号检查
      'quotes': 'off', // 关闭引号检查
    },
  },
);
