<template>
    <div class="ori-movie">
        <!-- 原声音乐 -->
        <div class="ori-music" v-for="(music,index) in pageData.music">
            <!-- 胶片背景 -->
            <div class="film-bg"></div>
            <div class="movie-music">
                <div class="ori-title">- 电影原声 -</div>
                <div class="music-info">
                    <p class="music-title">{{ music.name }}</p>
                    <p class="music-singer">{{ music.singer }}</p>
                    <div class="music-rotate ">
                        <div class="music-circle"></div>
                        <a @click="goPlay($event,music)" class="music-poster">
                            <img :src="music.poster">
                            <div class="music-play"></div>
                        </a>
                        <div class="text-bg clearfix"></div>
                    </div>
                    <div class="music-bar">
                        <span class="icon-fabu-bar"></span>
                        <span class="fabu-num">{{music.thumbs }}</span>
                        <span class="mask">-</span>
                        <span class="icon-coll-c cur-color"></span>
                        <span class="mask">-</span>
                        <span class="icon-write-bar"></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 详情页组件 -->
        <v-play :music="music" :showplay="showplay"></v-play>
    </div>
</template>

<script type="text/ecmascript-6">
    import play from  '../details/play-details.vue'
    export default{
        data(){
            return {
                music: {},
                showplay: false
            }
        },
        props: {
            pageData: {
                type: Object
            }
        },
        methods: {
            goPlay(event, music){
                if (event._constructored) {
                    return
                }
                this.music = music;
                this.showplay = true;
            },
            open(){
                window.open();
                this.$router.push({path: 'music/playDeatils'});
            }
        },
        components: {
            "v-play": play,
        }
    };
</script>

<!--

<script type="text/ecmascript-6">
    import play from  '../details/play-details.vue'
    export default{
        data(){
            return {
                music: {},
                showplay: false
            }
        },
        props: {
            pageData: {
                type: Object
            }
        },
        methods: {
            goPlay(event, music){
                if (event._constructored) {
                    return
                }
                this.music = music;
                this.showplay = true;
            },
            closePlay() {
                this.showplay = false;
            }
        },
        components: {
            "v-play": play
        }
    };
</script>
-->

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/index";

    .ori-music {
        .movie-music {
            .padauto(0, 58, 200, 58);
        }
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
                    background: url("img/music-rotate.png") no-repeat -10px 0;
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
                    background: url("img/music-play.png") no-repeat;
                    background-size: 5rem 5rem;
                }
                .text-bg {
                    width: 3.7rem;
                    height: 19rem;
                    background: url("img/text-bgc.png") no-repeat right center;
                    background-size: 3.7rem 15.1rem;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }

</style>