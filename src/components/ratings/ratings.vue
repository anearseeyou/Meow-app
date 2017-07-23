<template>
    <div class="user-ratings">
        <!-- 胶片背景 -->
        <div v-for="(rat,index) in pageData.ratings">
            <div class="film-bg"></div>
            <!-- 用户评论 -->
            <div class="ratings-info indent-sty">
                <div class="ori-title">- 影片短评 -</div>
                <div class="user-u clearfix">
                    <div class="user-portrait fl"><img :src="rat.avatar" :alt="rat.username"></div>
                    <div class="user-info fl">
                        <span class="user-name">{{ rat.username }}</span>
                        <span class="rat-date">{{ rat.rateTime }}</span>
                    </div>
                </div>
                <div class="rat-text">
                    <p class="text-sty">{{ rat.content }}</p>
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
    // 评论信息
    .ratings-info {
        .mb(58);
        .user-u {
            .mb(58);
        }
    }
</style>