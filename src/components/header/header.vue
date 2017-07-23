<template>
    <div class="header">
        <div class="movie-code">
            <a class="bg-image" href="javascript:;"></a>
        </div>
        <div v-if="pageData" class="movie-title">
            {{ pageData.name}}
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            pageData: {
                type: Object
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/index";
    // 头部样式
    .header {
        width: 100%;
        .height-h(132);
        .light-h(132);
        text-align: center;
        background: #151519;
        box-sizing: border-box;
        position: relative;
        .movie-code {
            .bg-image {
                .width-w(60);
                .height-h(60);
                .font-s(80);
                background: url('../../../resource/img/code.png') no-repeat;
                background-size: 100% 100%;
                position: absolute;
                .left(58);
                .top(36);
            }
        }
        .movie-title {
            .font-s(60);
            flex: 1;
            color: #FFF;
        }
    }
</style>