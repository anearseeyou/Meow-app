<template>
    <div class="movie-story">
        <!-- 胶片背景 -->
        <div class="film-bg"></div>
        <!-- 电影故事 -->
        <div class="story-info indent-sty">
            <div class="ori-title">- 经典台词 -</div>
            <div v-if="pageData.lineData.movieInfo" class="text-sty story-text">
                <p class="line-text">{{ pageData.lineData.movieInfo[0].movieStory }}</p>
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
