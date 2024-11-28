import './assets/main.css';
import './assets/iconfont/iconfont.css';
import animateDirective from './utils/index'; // 确保路径正确
import i18n from '@/locals/index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

// 注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 使用插件

app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(i18n);

// 注册自定义指令
app.directive('animate', animateDirective); // 注册自定义指令

// 挂载应用
app.mount('#app');