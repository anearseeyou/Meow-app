<template>
    <div class="user-ratings">
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 用户评论 -->
        <div  class="ratings-info indent-sty">
            <div class="ori-title">- 影片短评 -</div>
            <div v-if="pageData.lineData.userInfo" class="user-u clearfix">
                <div class="user-portrait fl"><img :src="pageData.lineData.userInfo[0].userPortrait" alt=""></div>
                <div  class="user-info fl">
                    <span  class="user-name">{{ pageData.lineData.userInfo[0].username }}</span>
                    <span class="rat-date">{{ pageData.lineData.userInfo[0].rateTime }}</span>
                </div>
            </div>
            <div v-if="pageData.lineData.userInfo" class="rat-text">
                <p class="text-sty">{{ pageData.lineData.userInfo[0].text }}</p>
            </div>
            <div v-if="pageData.lineData.movieInfo" class="rat-bar fr">
                <span class="icon-fabu-c"><span class="path1"></span><span class="path2"></span></span>
                <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
            </div>
        </div>
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 用户评论 -->
        <div  class="ratings-list indent-sty">
            <div class="ori-title">- 影片短评 -</div>
            <div v-if="pageData.lineData.userInfo" class="user-u clearfix">
                <div class="user-portrait fl"><img :src="pageData.lineData.userInfo[1].userPortrait" alt=""></div>
                <div  class="user-info fl">
                    <span  class="user-name">{{ pageData.lineData.userInfo[1].username }}</span>
                    <span class="rat-date">{{ pageData.lineData.userInfo[1].rateTime }}</span>
                </div>
            </div>
            <div v-if="pageData.lineData.userInfo" class="rat-text">
                <p class="text-sty">{{ pageData.lineData.userInfo[1].text }}</p>
            </div>
            <div v-if="pageData.lineData.movieInfo" class="rat-bar fr">
                <span class="icon-fabu-c"><span class="path1"></span><span class="path2"></span></span>
                <span class="fabu-num">{{ pageData.lineData.movieInfo[0].fabulous }}</span>
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
    // 评论信息
    .ratings-info {
        .mb(96);
        .user-u {
            .mb(58);
        }

    }
</style>