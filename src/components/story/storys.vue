<template>
    <div class="sta-lines">
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 台词内容 -->
        <div class="stutra-line">
            <div class="ori-title">- 电影故事 -</div>
            <div v-if="pageData.lineData.movieInfo" class="line-info">
                <p class="line-text">{{ pageData.lineData.movieInfo[0].stutraLineOne }}</p>
            </div>
            <div v-if="pageData.lineData.movieInfo" class="music-bar">
                <span class="icon-fabu-bar"></span>
                <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                <span class="mask">-</span>
                <span class="icon-copy-bar"></span>
                <span class="mask">-</span>
                <span class="icon-coll-c cur-color"></span>
            </div>
        </div>

        <!-- 胶片背景 -->
        <div class="film-bg"></div>

        <!-- 台词内容 -->
        <div class="stutra-line">
            <div class="ori-title">- 电影故事 -</div>
            <div v-if="pageData.lineData.movieInfo" class="line-info">
                <p class="line-text">{{ pageData.lineData.movieInfo[0].stutraLineTwo }}</p>
            </div>
            <div v-if="pageData.lineData.movieInfo" class="music-bar">
                <span class="icon-fabu-bar"></span>
                <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
                <span class="mask">-</span>
                <span class="icon-copy-bar"></span>
                <span class="mask">-</span>
                <span class="icon-coll-c cur-color"></span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            lines: {
                type: true
            },
            pageData: {
                type: Object
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/index";

    .stutra-line {
        .ml(58);
        .pr(58);
        .mb(200);
        .line-info {
            .mb(116);
            .line-text {
                .font-s(48);
                .light-h(80);
                color: #5D5D5D;
                text-indent: 2rem;
                text-align: justify;
                display: -webkit-box;
                -webkit-box-orient:vertical;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-line-clamp: 4;
            }
        }
        .icon-copy-bar{
            .font-s(50);
            vertical-align: middle;
        }
    }

</style>