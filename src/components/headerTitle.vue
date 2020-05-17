<template>
  <div class="title-nav">
      <div class="nav-under">
            <ul class="nav" v-show="changeDemo==='home'">
                <li
                    v-for="item of homeList"
                    :key="item.value"
                    :class="[secondSelect===item.value?'second-select':'', 'nav-item']"
                    @click="changeSecondtitle(item.value)">
                    {{item.label}}
                </li>
            </ul>
            <ul class="nav" v-show="changeDemo==='booklet'">
                <li
                    v-for="item of bookletList"
                    :key="item.value"
                    :class="[secondSelect===item.value?'second-select':'', 'nav-item']"
                    @click="changeSecondtitle(item.value)">
                    {{item.label}}
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderTitle',
    props: {
        changeDemo: String,
        secondSelect: String
    },
    data () {
        return {
            homeList: [{
                value: 'recommend',
                label: '推荐'
            }, {
                value: 'realEnd',
                label: '后端'
            }, {
                value: 'frontEnd',
                label: '前端'
            }, {
                value: 'android',
                label: 'Android'
            }, {
                value: 'ios',
                label: 'iOS'
            }, {
                value: 'intelligent',
                label: '人工智能'
            }],
            bookletList: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'frontEnd',
                label: '前端'
            }, {
                value: 'realEnd',
                label: '后端'
            }, {
                value: 'mobile',
                label: '移动开发'
            }, {
                value: 'blockchain',
                label: '区块链'
            }, {
                value: 'general',
                label: '通用'
            }]
        }
    },
    methods: {
        changeSecondtitle (value) {
            this.$emit('switch', value)
            this.secondSelect = value
        }
    }
}
</script>

<style scoped lang="scss">
.title-nav {
    margin: 1px auto 0;
    background: #fff;
    height: 45px;
    .nav-under {
        max-width: 960px;
        margin: 0 auto;
        .nav {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            height: 45px;
            color: #71777C;
            list-style-type: none;
            .second-select {
                color: #007fff;
            }
            .nav-item {
                padding: 0 24px 0 0 ;
                font-size: 14px;
            }
        }
    }
}
</style>
