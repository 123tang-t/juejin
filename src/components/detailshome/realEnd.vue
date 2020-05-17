<template>
    <div class="recommend">
        <HeaderTitle/>
        <div class="desc">
            <p>后端</p>
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
        height: 200px;
        background: #fff;
        p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(50%, 50%);
            font-size: 50px;
        }
    }
}
</style>
