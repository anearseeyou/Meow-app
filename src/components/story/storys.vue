<template>
    <div class="movie-story">
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 电影故事 -->
        <div class="story-info indent-sty" v-for="(story,index) in pageData.story">
            <div class="ori-title">- 电影故事 -</div>
            <div class="text-sty story-text">
                <p class="line-text">{{ story.content }}</p>
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

    .movie-story {
        .story-text {
            height: auto;
        }
    }
</style>
