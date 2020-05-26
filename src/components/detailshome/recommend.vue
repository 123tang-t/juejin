<template>
    <div class="recommend">
        <HeaderTitle/>
        <div class="desc">
            <!-- <div class="desc-child">
                推荐
            </div> -->
            <ul class="list">
                <li>123</li>
            </ul>
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
    },
    methods: {
        // changeScroll (el) {
        //     const height = el.target.scrollHeight - el.target.scrollTop - el.target.clientHeight
        //     if (height === 0) {
        //         console.log('到底了')
        //     } else {
        //         console.log(height)
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
.recommend {
    height: 100%;
    .desc {
        position: relative;
        margin-top: 2px;
        height: 500px;
        background: #fff;
        // overflow-y: auto;
        .desc-child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
        }
        .list {
            height: 1000px;
        }
    }
}
</style>
