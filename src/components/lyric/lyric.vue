<template>
    <div class="">
        歌词详情
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
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            lyric: {
                type: Object
            },
            pageData: {
                type: Object
            }
        },
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>