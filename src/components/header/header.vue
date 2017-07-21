<template>
    <div class="header">
        <div class="movie-code">
            <a class="bg-image" href="javascript:;"></a>
        </div>
        <div v-if="pageData.lineData.movieInfo" class="movie-title">
            {{ pageData.lineData.movieInfo[0].name }}
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
