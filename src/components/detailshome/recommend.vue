<template>
    <div class="recommend">
        <HeaderTitle/>
        <div class="desc">
            <div class="desc-child">推荐</div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/public/headerTitle.vue'

export default {
    name: 'Recommend',
    components: {
        HeaderTitle
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.recommend {
    .desc {
        position: relative;
        margin-top: 2px;
        height: 500px;
        background: #fff;
        .desc-child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
        }
    }
}
</style>
