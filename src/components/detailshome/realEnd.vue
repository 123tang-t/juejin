<template>
    <div class="recommend">
        <HeaderTitle/>
        <div class="desc">
            <div class="desc-child">后端</div>
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
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2px;
        height: 500px;
        background: #fff;
        .desc-child {
            font-size: 50px;
        }
    }
}
</style>
