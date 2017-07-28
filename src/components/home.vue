<template>
    <div class="home">
        <!-- 头部 -->
        <v-header :pageData="pageData.movie"></v-header>
        <!-- 海报 -->
        <div class="banner">
            <img class="banner-poster" v-if="pageData.movie" :src="pageData.movie.poster">
        </div>
        <!-- 海报信息 -->
        <div v-if="pageData.movie" class="banner-info">
            <span class="deliveryTime">
                上映时间：{{pageData.movie.release}}
            </span>
            <span class="score">
                豆瓣评分：{{pageData.movie.score }}
            </span>
        </div>
        <!-- 导航 -->
        <v-nav></v-nav>
        <!-- 路由占位符 -->
        <div class="app-content">
            <keep-alive>
                <router-view :pageData="pageData"></router-view>
            </keep-alive>
        </div>
        <!-- 底部 -->
        <div class="footer">
            <ul class="nav-wrap clearfix">
                <li class="icon-home-c cur-color"><br>
                    <a class="cur-color" href="#">首页</a>
                </li>
                <li class="icon-recom-bar"><br>
                    <a href="#">收藏</a>
                </li>
                <li class="icon-search-bar"><br>
                    <a href="#">搜索</a>
                </li>
                <li class="icon-mine-bar"><br>
                    <a href="#">我的</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    /* 注册组件 */
    import header from './header/header.vue';
    import nav from './nav/nav.vue';
    import music from './music/music.vue';
    export default {
        name: 'home',
        data(){
            return {
                pageData: {},
            }
        },
        created(){
            this.$http.get('/api/data').then((response) => {
                response = response.body;
                if (response) {
                    this.pageData = response.data;
                }
            });
        },
        components: {
            'v-header': header,
            'v-nav': nav
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../common/less/index";

    .banner {
        .marauto(58, 0, 58, 58);
        .pr(58);
        .banner-poster {
            width: 100%;
            box-shadow: 1px 1px 10px #E5E5E9;
        }
    }

    .banner-info {
        display: flex;
        span {
            flex: 0.5;
            color: #aaaaaa;
            .font-s(40);
            .mb(54);
        }
        .deliveryTime {
            .pl(58);
        }
        .score {
            text-align: right;
            .pr(58);
        }
    }

    .film-bg {
        width: 100%;
        .height-h(44);
        background: url("../../resource/img/film-bg.png") no-repeat;
        background-size: 100% 100%;
        .mb(64);
    }

    .footer {
        width: 100%;
        .height-h(148);
        text-align: center;
        .nav-wrap {
            width: 100%;
            .height-h(148);
            display: flex;
            box-sizing: border-box;
            border-top: 0.05rem solid #ededed;
            box-shadow: 0 2rem 5rem rgba(17, 17, 57, 0.2);
            background: #FFF;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            & > li {
                flex: 0.25;
                .font-s(80);
                .mt(24);
                & > a {
                    display: block;
                    .mt(16);
                    .font-s(28);
                    color: #aaaaaa;
                    &.cur-color {
                        color: #161619;
                    }
                }
            }
        }

    }

</style>
