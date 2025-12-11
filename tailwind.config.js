/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // 响应式断点配置（基于1440px设计稿）
    screens: {
      'sm': '640px',   // 小屏设备
      'md': '768px',   // 平板竖屏
      'lg': '1024px',  // 平板横屏/小笔记本
      'xl': '1280px',  // 标准笔记本
      '2xl': '1440px', // 标准桌面（设计稿基准）
      '3xl': '1920px', // 大屏显示器
    },
    extend: {
      colors: {
        theme: 'var(--color-primary)',
      },
      animation: {
        'ping': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'glow': 'glow 5s ease-in-out infinite alternate',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        glow: {
          '0%': { transform: 'translate(10%, 10%) scale(1)', opacity: 0.1 },
          '25%': { transform: 'translate(-10%, 10%) scale(1.2)', opacity: 0.3 },
          '50%': { transform: 'translate(-10%, -10%) scale(1.1)', opacity: 0.5 },
          '75%': { transform: 'translate(10%, -10%) scale(1.3)', opacity: 0.3 },
          '100%': { transform: 'translate(10%, 10%) scale(1)', opacity: 0.1 },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      // 容器最大宽度配置
      maxWidth: {
        'container': '1440px',
      },
      spacing: {
        '10.5': '42px',
      }
    },
  },
  plugins: [],
};
