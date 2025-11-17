import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      // 构建产物
      "**/dist/**",
      "**/build/**",

      // 依赖目录
      "**/node_modules/**",

      // 测试覆盖率报告
      "**/coverage/**",

      // 各类配置文件
      "**/*.config.js",
      "**/.eslintrc.js",
      "**/.prettierrc.js",
      "**/postcss.config.js",
      "**/vite.config.js",

      // 静态资源目录
      "**/public/**",
      "**/static/**",

      // 其他常见需要忽略的文件类型
      "**/*.min.js",
      "**/*.d.ts",
      "**/*.test.js",
      "**/*.spec.js",
      "**/*.svg",
      "**/*.json",
      "**/*.html",
      "**/*.css",
      "**/*.scss",
      "**/*.less",
      "**/*.md",

      // 特定环境配置
      "**/.env.*",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-empty": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/immutability":"off",
      "react-hooks/refs":"off",
      "react-hooks/set-state-in-effect": "off"
    },
  }
);
