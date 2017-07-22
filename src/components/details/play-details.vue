<template>
    <div class="play-details">
        <!-- 头部 -->
        <div v-if="pageData.lineData.movieInfo" class="header">
            <div class="movie-code"><a class="bg-image"></a></div>
            <div class="movie-title">{{ pageData.lineData.movieInfo[1].name }}</div>
            <div class="music-share"><a class="write-img"></a></div>
        </div>
        <!-- 歌词展示 -->
        <div class="play-video">
            <video class="lines-poster" poster="../../../static/img/lines-poster.png"></video>
            <div class="control clearfix">
                <span class="fl">01:00</span>
                <span class="fl ctrl-bar"><i class="mask-bar"></i></span>
                <span class="fr">04:22</span>
            </div>
        </div>
        <!-- 歌词导航 -->
        <div class="lines-tab indent-sty">
            <div class="lines-text"><span class="line-title">电影歌词</span></div>
            <div class="lines-movie">
                <span class="line2-c"></span>
            </div>
            <div class="lines-movie">
                <span class="line-story"></span>
            </div>
        </div>
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 歌词 -->
        <div v-if="pageData.lineData.movieInfo" class="sing-lines indent-sty text-sty">
            <p class="sing-text">{{ pageData.lineData.movieInfo[1].singLines }}</p>
        </div>
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <div class="lines-tab indent-sty">
            <div class="lines-text ">
                <div class="clearfix ratings-title">
                    <span class="icon-rat-bar fl"></span>
                    <span class="line-title rat-list fl ">评论列表</span>
                </div>
                <div>
                    <div v-if="pageData.lineData.userInfo" class="user-u change-u clearfix">
                        <div class="user-portrait fl"><img :src="pageData.lineData.userInfo[1].userPortrait" alt="">
                        </div>
                        <div class="user-info fl">
                            <span class="user-name">{{ pageData.lineData.userInfo[1].username }}</span>
                            <span class="rat-date">{{ pageData.lineData.userInfo[1].rateTime }}</span>
                        </div>
                    </div>
                    <div v-if="pageData.lineData.userInfo" class="rat-text">
                        <p class="text-sty change-sty">{{ pageData.lineData.userInfo[1].text }}</p>
                        <div v-if="pageData.lineData.movieInfo" class="rat-bar fr clearfix">
                            <span class="icon-fabu-c"><span class="path1"></span><span class="path2"></span></span>
                            <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                        </div>
                    </div>

                </div>
                <div>
                    <div v-if="pageData.lineData.userInfo" class="user-u change-u clearfix">
                        <div class="user-portrait fl"><img :src="pageData.lineData.userInfo[1].userPortrait" alt="">
                        </div>
                        <div class="user-info fl">
                            <span class="user-name">{{ pageData.lineData.userInfo[1].username }}</span>
                            <span class="rat-date">{{ pageData.lineData.userInfo[1].rateTime }}</span>
                        </div>
                    </div>
                    <div v-if="pageData.lineData.userInfo" class="rat-text">
                        <p class="text-sty change-sty">{{ pageData.lineData.userInfo[1].text }}</p>
                    </div>
                    <div v-if="pageData.lineData.movieInfo" class="rat-bar fr">
                        <span class="icon-fabu-c"><span class="path1"></span><span class="path2"></span></span>
                        <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                    </div>
                </div>
                <div>
                    <div v-if="pageData.lineData.userInfo" class="user-u change-u clearfix">
                        <div class="user-portrait fl"><img :src="pageData.lineData.userInfo[1].userPortrait" alt="">
                        </div>
                        <div class="user-info fl">
                            <span class="user-name">{{ pageData.lineData.userInfo[1].username }}</span>
                            <span class="rat-date">{{ pageData.lineData.userInfo[1].rateTime }}</span>
                        </div>
                    </div>
                    <div v-if="pageData.lineData.userInfo" class="rat-text">
                        <p class="text-sty change-sty">{{ pageData.lineData.userInfo[1].text }}</p>
                    </div>
                    <div v-if="pageData.lineData.movieInfo" class="rat-bar fr">
                        <span class="icon-fabu-c"><span class="path1"></span><span class="path2"></span></span>
                        <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScorll from "better-scroll";
    export default{
        props: {
            detailPlay: {
                type: Object
            }
        },
        data(){
            return {
                lines: {},
                music: {},
                pageData: {
                    lineData: {},
                    musicData: {},
                    storyData: {},
                    ratingData: {}
                }
            }
        },
        method: {
            show(){
                this.isShow = true;
            }
        },
        created(){
            this.$http.get('/api/lines').then((response) => {
                response = response.body;
                if (response) {
                    this.pageData.lineData = response.data;
                    console.log(this.pageData.lines);
                }
            });
        }
    }
</script>

<style lang="less" rel="stylesheet/less">

    @import "../../common/less/index";

    .play-details {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: #fff;
        overflow-y: scroll;
        overflow-x: hidden;
        .music-share {
            .write-img {
                display: block;
                position: absolute;
                .width-w(60);
                .height-h(60);
                .right(58);
                .top(36);
                background: url("img/write-nc.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .lines-poster {
            width: 100%;
        }
        .control {
            .font-s(34);
            .padauto(58, 58, 58, 58);
            color: #5d5d5d;
            box-sizing: border-box;
            .ctrl-bar {
                .height-h(5);
                .width-w(480);
                .ml(20);
                .top(5);
                background: #dfdfdf;
                position: relative;
                border-radius: 0.2rem;
                &:after {
                    content: '';
                    .width-w(18);
                    .height-h(18);
                    background-color: #161619;
                    position: absolute;
                    .left(100);
                    .top(-5);
                    border-radius: 50%;
                }
                .mask-bar {
                    .width-w(100);
                    .height-h(5);
                    display: block;
                    background-color: #161619;
                    position: absolute;
                    border-radius: 0.2rem;
                }
            }
        }
        .lines-tab {
            display: flex;
            .mb(58);
            .lines-text {
                flex: 8;
                .font-s(60);
                .pt(12);
                .line-title {
                    display: block;
                    .width-w(150);
                    .pb(10);
                    border-bottom: 0.05rem solid #000;
                }
            }
            .lines-movie {
                flex: 1;
                .line2-c, .line-story {
                    display: block;
                    .width-w(50);
                    .height-h(50);
                    .ml(40);
                    text-align: right;
                }
                .line2-c {
                    background: url("img/line2-c.png") no-repeat;
                    background-size: 100% 100%;
                }
                .line-story {
                    background: url("img/lines-nc.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        .sing-lines {
            text-align: center;
            overflow: hidden;
            .mb(58);
            height: auto;
        }
        .rat-list {
            .ml(48);
        }
        .ratings-title {
            .mb(58);
        }
        .change-sty {
            text-indent: 0;
        }
        .change-u {
            .mb(58);
        }
    }
</style>