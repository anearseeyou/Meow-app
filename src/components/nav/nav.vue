<template>
    <div class="nav indent-sty">
        <div class="nav-music">
            <span class="music-text">{{nameList[navIndex].name}}</span>
        </div>
        <div v-for="(line,index) in nameList" :class="line.navClass">
            <router-link :to="line.url">
                <span :class="line.icons[1]" @click="changeC(index)"></span>
            </router-link>
        </div>
    </div>
</template>
<script>
    /* 注册组件 */
    export default{
        data(){
            return {
                nameList: [
                    {
                        "name": "原声音乐",
                        "navClass": "nav-item",
                        "iconClass": "icon-music-bar",
                        "icons": ["icon-music-c", "icon-music-bar"],
                        "url": "/music"
                    },
                    {
                        "name": "经典台词",
                        "navClass": "nav-item",
                        "iconClass": "icon-story-bar",
                        "icons": ["icon-story-c", "icon-story-bar"],
                        "url": "/lines"
                    },
                    {
                        "name": "电影故事",
                        "navClass": "nav-item",
                        "iconClass": "icon-line-bar",
                        "icons": ["icon-lines-c", "icon-line-bar"],
                        "url": "/storys"
                    },
                    {
                        "name": "影片短评",
                        "navClass": "nav-item",
                        "iconClass": "icon-rat-bar",
                        "icons": ["icon-rat-c", "icon-rat-bar"],
                        "url": "/ratings"
                    }
                ],
                navIndex: 0
            }
        },
        methods: {
            changeC(currentIndex) {
                this.navIndex = currentIndex;
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/index";

    .nav {
        .pt(10);
        .height-h(50);
        padding-bottom: 3.2rem;
        display: flex;

        .nav-music {
            flex: 0.6;
        }
        .nav-item {
            .pl(20);
            flex: 0.1;
            vertical-align: top;
            text-align: right;

            & > a {
                display: block;
                &.active > span:before {
                    color: #161619;
                }
            }
        }
    }

    .music-text {
        flex: 0.2;
        position: relative;
        .font-s(60);
        vertical-align: top;
        .ml(5);
        &:after {
            content: ' ';
            display: block;
            height: 0.1rem;
            width: 100%;
            background-color: #1F253D;
            position: absolute;
            bottom: -0.3rem;
            left: 0;
        }

    }

    .icon-music-bar, .icon-story-bar, .icon-line-bar, .icon-rat-bar {
        .font-s(80);
    }

    .icon-music-c, .icon-story-c, .icon-lines-c, .icon-rat-c {
        .font-s(80);
        color: #000;
    }

</style>