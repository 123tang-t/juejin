<template>
    <div class="header">
        <div class="nav">
            <div
                v-for="item of list"
                :key="item.value"
                :class="[thirdSelect===item.value?'third-select':'', 'nav-children']"
                @click="changeThird(item.value)">
                {{item.label}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderTitle',
    data () {
        return {
            thirdSelect: 'popular',
            list: [{
                value: 'popular',
                label: '热门'
            }, {
                value: 'newest',
                label: '最新'
            }, {
                value: 'hot',
                label: '热榜'
            }]
        }
    },
    methods: {
        changeThird (value) {
            this.thirdSelect = value
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    background: #fff;
    .nav {
        display: flex;
        flex-direction: row;
        height: 15px;
        padding: 15px 12px;
        color: #71777C;
        .third-select {
            color: #007fff;
        }
        .nav-children {
            width: 56.63px;
            text-align: center;
            font-size: 13px;
        }
    }
}
</style>
