import axios from 'axios';
import { reactive } from 'vue';

// 创建一个响应式的加载状态
const loadingState = reactive({ isLoading: false });

const instance = axios.create({
    baseURL: 'http://localhost:11123',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});
instance.interceptors.request.use((config) => {
    loadingState.isLoading = true; // 开始加载
    return config;
});

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        loadingState.isLoading = false; // 结束加载
        return response;
    },
    (error) => {
        loadingState.isLoading = false; // 结束加载
        return Promise.reject(error);
    }
);

// 导出 Axios 实例和加载状态
export { instance, loadingState };