import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'; 

// 创建 Vue 应用实例
const app = createApp(App);

// 使用路由器
app.use(router).mount('#app');
