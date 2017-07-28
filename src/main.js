// 依赖
import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import VueResource from 'vue-resource';

import './javascript/fontSize'
// 全局Less样式
import './common/less/index.less'

// 全局注册
Vue.use(VueResource);

Vue.config.debug = true;

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


