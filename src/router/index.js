// 依赖
import Vue from 'vue';
import Router from 'vue-router';
import music from '@/components/music/music';
import lines from '@/components/lines/lines';
import storys from '@/components/story/storys';
import ratings from '@/components/ratings/ratings';
import play from '@/components/details/play-details.vue'
const home = r => require.ensure([], () => r(require('@/components/Home')), 'home')

// 全局组件
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '',
                    component: music
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
        },
        //详情配置这级
        {
            path: '/datail',
            component: play
        }
    ]
});