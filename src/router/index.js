// 依赖
import Vue from 'vue';
import Router from 'vue-router';
import music from '../components/music/music';
import lines from '../components/lines/lines';
import storys from '../components/story/storys';
import ratings from '../components/ratings/ratings';

// 全局组件
Vue.use(Router);

// 路由跳转
export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/music'
        },
        {
            path: '/music',
            component: music
        },
        {
            path: '/lines',
            component: lines
        },
        {
            path: '/storys',
            component: storys
        },
        {
            path: '/ratings',
            component: ratings
        }
    ]
});
