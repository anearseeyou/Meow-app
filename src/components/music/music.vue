<template>
    <div class="ori-movie">
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 原声音乐 -->
        <div class="ori-music">
            <div class="ori-title">- 电影原声 -</div>
            <div v-if="pageData.lineData.movieInfo" class="music-info">
                <p class="music-title">{{ pageData.lineData.movieInfo[0].name }}</p>
                <p class="music-singer">{{ pageData.lineData.movieInfo[0].singer }}</p>
                <div class="music-rotate ">
                    <div class="music-circle"></div>
                    <a @click="detailPlay(play , $event)" v-if="pageData.lineData.movieInfo" class="music-poster ">
                        <img :src="pageData.lineData.movieInfo[0].posterOne">
                        <div class="music-play"></div>
                    </a>
                    <div class="text-bg clearfix"></div>
                </div>
                <div class="music-bar">
                    <span class="icon-fabu-bar"></span>
                    <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                    <span class="mask">-</span>
                    <span class="icon-coll-c cur-color"></span>
                    <span class="mask">-</span>
                    <span class="icon-write-bar"></span>
                </div>
            </div>
        </div>

        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 原声音乐 -->
        <div class="ori-music">
            <div class="ori-title">- 电影原声 -</div>
            <div v-if="pageData.lineData.movieInfo" class="music-info">
                <p class="music-title">{{ pageData.lineData.movieInfo[0].singName }}</p>
                <p class="music-singer">{{ pageData.lineData.movieInfo[0].singer }}</p>
                <div class="music-rotate ">
                    <div class="music-circle"></div>
                    <div v-if="pageData.lineData.movieInfo" class="music-poster ">
                        <img :src="pageData.lineData.movieInfo[0].posterTwo">
                        <div class="music-play"></div>
                    </div>
                    <div class="text-bg clearfix"></div>
                </div>
                <div class="music-bar">
                    <span class="icon-fabu-bar"></span>
                    <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                    <span class="mask">-</span>
                    <span class="icon-coll-c cur-color"></span>
                    <span class="mask">-</span>
                    <span class="icon-write-bar"></span>
                </div>
            </div>
        </div>

        <!-- 详情页组件 -->
        <play :lines="detailPlay"></play>
    </div>
</template>

<script type="text/ecmascript-6">
    import play from  '../details/play-details.vue'
    export default{
        props: {
            lines: {
                type: Object
            },
            music: {
                type: Object
            },
            pageData: {
                type: Object
            }
        },
        methods: {
            detailPlay(play, event){
                if (!event._constructored) {
                    return
                }
                this.detailPlay = play;
            }
        },
        components: {
            play
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/index";

    .ori-music {
        .padauto(0, 58, 200, 58);
        text-align: center;
        position: relative;
        .film-pos {
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .music-info {
            position: relative;
            text-align: left;
            color: #161619;
            .music-title {
                .font-s(66);
                .mb(36);
            }
            .music-singer {
                .font-s(48);
                .mb(96);
            }
            .music-rotate {
                width: 100%;
                height: 19rem;
                .mb(96);
                position: relative;
                .music-circle {
                    width: 100%;
                    .height-h(380);
                    background: url("music-rotate.png") no-repeat -10px 0;
                    background-size: 18rem 18rem;
                    position: absolute;
                    left: 50%;
                    top: 0;
                    margin-left: -14rem;
                }
                .music-poster {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -9.5rem;
                    & > img {
                        .width-w(380);
                        .light-h(380);
                    }
                }
                .music-play {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -2.5rem;
                    margin-top: -2.5rem;
                    .width-w(100);
                    .height-h(100);
                    background: url("music-play.png") no-repeat;
                    background-size: 5rem 5rem;
                }
                .text-bg {
                    width: 3.7rem;
                    height: 19rem;
                    background: url("text-bgc.png") no-repeat right center;
                    background-size: 3.7rem 15.1rem;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
</style>