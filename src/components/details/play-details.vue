<template>
    <div class="play-details" ref="playWrapper" v-show="showplay" transition="move-transition">
        <!-- 头部 -->
        <div v-if="music" class="backHome">
            <div class="back-btn"><a class="back-bg"></a></div>
            <div class="play-title">{{ music.name }}</div>
            <div class="write-btn"><a class="write-bg"></a></div>
        </div>

        <!-- 歌词海报 -->
        <div class="play-video">
            <video class="lines-poster" :poster="music.lyricPoster"></video>
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

        <!-- 歌词内容 -->
        <div v-if="music" class="sing-lines indent-sty text-sty">
            <p class="sing-text">{{ music.lyric }}</p>
        </div>

        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <div class="lines-tab indent-sty">
            <div class="lines-text ">
                <div class="clearfix ratings-title">
                    <span class="icon-rat-bar fl"></span>
                    <span class="line-title rat-list fl ">评论列表</span>
                </div>
                <!-- 评论列表页 -->
                <div v-for="(rat,index) in music.ratings" class="ratings-list">
                    <div class="user-u change-u clearfix">
                        <div class="user-portrait fl"><img :src="rat.avatar" alt="rat.username">
                        </div>
                        <div class="user-info fl">
                            <span class="user-name">{{ rat.username }}</span>
                            <span class="rat-date">{{ rat.rateTime }}</span>
                        </div>
                    </div>
                    <div class="rat-text">
                        <p class="text-sty change-sty">{{ rat.content }}</p>
                    </div>
                    <div class="rat-bar clearfix">
                        <div class="fr">
                            <span class="icon-fabu-c">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </span>
                            <span class="fabu-num">{{ rat.thumbs }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部固定 -->
        <div v-if="music" class="rat-footer">
            <div class="rat-left">
                <span class="left-bar icon-coll-bar"></span>
                <span class="left-bar icon-fabu-bar"></span>
                <span class="left-bar icon-write-bar"></span>
            </div>
            <div class="rat-middle"></div>
            <div class="rat-right">
                <span class="right-bar">52赞</span>
                <span class="right-bar">12评论</span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import detaulNav from '../detail-nav/detail-nav.vue';
    import BScorll from "better-scroll";
    export default{
        props: {
            music: {},
            pageData: {},
            showplay: false
        },
        watch: {
            showplay: function () {
                this.$nextTick(() => {
                    if (this.playWrapper) {
                        this._initScroll();
                    }
                });
            }
        },
        method: {
            _initScroll() {
                if (!this.playWrapper) {
                    this.playWrapper = new BScroll(this.$refs.playWrapper, {
                        click: true
                    });
                } else {
                    this.playWrapper.refresh()
                }
            }
        },
    }
</script>

<!--

<script type="text/ecmascript-6">
    import BScorll from "better-scroll";
    import Vue from 'vue'
    export default{
        props: {
            music: {},
            showplay: false
        },
        watch: {
            showplay: function (status) {
                this.showplay = status;
                if (status) {
                    this.$nextTick(() => {
                        if (!this.playWrapper) {
                            this.playWrapper = new BScroll(this.$refs.playWrapper, {
                                click: true
                            });
                        } else {
                            this.playWrapper.refresh()
                        }
                    });
                }
            }
        },
        methods: {
            closePlay(){
                this.$emit("close");
            }
        }
    }
</script>
-->

<style lang="less" rel="stylesheet/less">

    @import "../../common/less/index";

    .play-title {
        .font-s(60);
    }

    .ratings-list {
        .mb(58);
        .pb(58);
        position: relative;
        &:after {
            content: '';
            display: block;
            width: 130%;
            .height-h(2);
            background: #ededed;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }

    .lines-tab {
        display: flex;
        .marauto(94, 58, 0, 58);
        .lines-text {
            flex: 8;
            .font-s(60);
            .pt(12);
            .line-title {
                position: relative;
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
                background: url("img/line2-nc.png") no-repeat;
                background-size: 100% 100%;
            }
            .line-story {
                background: url("img/lines-nc.png") no-repeat;
                background-size: 100% 100%;
            }
        }
    }

    // 头部固定
    .backHome {
        width: 100%;
        .height-h(132);
        .light-h(132);
        text-align: center;
        background: #151519;
        box-sizing: border-box;
        position: relative;
        color: #ffffff;
        .back-btn, .write-btn {
            position: absolute;
            top: 0;
        }
        .back-btn {
            .left(40);
        }
        .write-btn {
            .right(58);
        }
    }

    // 详情页
    .play-details {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        .bottom(148);
        z-index: 10;
        background-color: #fff;
        overflow-x: hidden;
        &.move-transition {
            transition: all 0.2s linear;
            transform: translate3d(0, 0, 0);
        }
        &.mover-enter, .mover-leave {
            transform: translate3d(100%, 0, 0);
        }
        .change-mb {
            .mb(58);
        }
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
        .sing-lines {
            text-align: center;
            overflow: hidden;
            .mb(94);
            height: auto;
        }
        .rat-list {
            .ml(48);
        }
        .ratings-title {
            .mb(94);
        }
        .change-sty {
            text-indent: 0;
        }
        .rat-bar, .change-u, .change-sty {
            .mb(66);
        }
    }

    // 底部固定
    .rat-footer {
        .height-h(148);
        width: 100%;
        display: flex;
        background: #e0e0e0;
        background: #FFF;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 0.05rem solid #ededed;
        box-shadow: 0 2rem 5rem rgba(17, 17, 57, 0.2);
        z-index: 11;
        .rat-left {
            flex: 5;
            display: flex;
        }
        .rat-middle {
            flex: 1;
        }
        .rat-right {
            .font-s(40);
            flex: 4;
            display: flex;
            color: #aaaaaa;
        }
        .right-bar, .left-bar {
            .mt(60);
            flex: 1;
            display: block;
            font-weight: normal;
        }
        .left-bar {
            .font-s(50);
            text-align: left;
            &:first-child {
                .pl(58);
            }
        }
        .right-bar {
            text-align: right;
            &:last-child {
                .pr(58);
            }
        }
    }

    .write-bg {
        display: block;
        .width-w(60);
        .height-h(60);
    }

    .back-bg {
        display: block;
        .width-w(35);
        .height-h(60);
        background: url("img/back@2x.png") no-repeat;
        background-size: 100% 100%;
    }
</style>