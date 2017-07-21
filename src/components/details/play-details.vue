<template>
    <div class="play-details">
        <!-- 头部 -->
        <div class="header">
            <div class="movie-code"><a class="bg-image"></a></div>
            <div class="movie-title">玉子</div>
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
            <div class="lines-text">电影歌词</div>
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
        <div class="sing-lines indent-sty text-sty">
            <p>idal waves don't beg forgiveness
                father, he enjoyed collisions
                the snowflake falls in may
                as the bells are ringing out
                cuz the man of the hour
                nature has its own religion
                father ruled by long division
                and the sky breaks at dawn
                we all come 'round
                and the road, the old men paved</p>
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
        .music-share {
            .write-img {
                display: block;
                position: absolute;
                .width-w(60);
                .height-h(60);
                .right(58);
                .top(36);
                background: url("write-nc.png") no-repeat;
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
                    background: url("line2-c.png") no-repeat;
                    background-size: 100% 100%;
                }
                .line-story {
                    background: url("lines-nc.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        .sing-lines {
            .width-w(700);
            margin: 0 auto;
            text-align: center;
        }
    }
</style>