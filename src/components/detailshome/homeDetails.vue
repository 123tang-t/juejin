<template>
    <div class="home-details">
        <HeaderTitle/>
        <div class="desc">
            <div class="list" v-for="item of homeDetails" :key="item.id">
                {{item.desc}}
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/public/headerTitle.vue'

export default {
    name: 'HomeDetails',
    props: {
        homeDetails: Array
    },
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
.home-details {
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
