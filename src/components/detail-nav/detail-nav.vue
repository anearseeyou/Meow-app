<!--

<template>
    &lt;!&ndash; 歌词导航 &ndash;&gt;
    <div class="lines-tab indent-sty change-mb">
        <div class="lines-text"><span class="line-title">电影歌词</span></div>
        <div class="lines-movie">
            <router-link :to="music/lyric">
                <span class="line2-c"></span>
            </router-link>
        </div>
        <div class="lines-movie">
            <router-link :to="music/content">
                <span class="line-story"></span>
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                lyric: {},
                content: {},
                music: {},
                pageData: {}
            }
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/index";

    .lines-tab {
        display: flex;
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
                background: url("img/line2-c.png") no-repeat;
                background-size: 100% 100%;
            }
            .line-story {
                background: url("img/lines-nc.png") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
</style>
-->
