<template>
    <div class="recommend">
        <HeaderTitle/>
        <div class="desc">
            <!-- <div class="desc-child">
                推荐
            </div> -->
            <div class="list" v-for="item of recommendList" :key="item.id">
                {{item.desc}}
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/public/headerTitle.vue'

export default {
    name: 'Recommend',
    props: {
        recommendList: Array
    },
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
        height: 100%;
        background: #fff;
        .desc-child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
        }
        .list {
            margin-top: 2px;
            height: 100px;
            text-align: center;
            background: cornflowerblue;
        }
    }
}
</style>
