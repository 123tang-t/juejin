<template>
    <div class="pins-page">
        <div class="left-nav">
            <ul class="list-top">
                <li
                    :class="[listSelect===menuTop.value?'list-select':'', 'list-child']"
                    v-for="menuTop of pinsListTop"
                    :key="menuTop.value"
                    @click="selectChange(menuTop.value)">
                    {{menuTop.label}}
                </li>
            </ul>
            <ul class="list-bottom">
                <li
                    :class="[listSelect===menuBottom.value?'list-select':'', 'list-child']"
                    v-for="menuBottom of pinsListBottom"
                    :key="menuBottom.value"
                    @click="selectChange(menuBottom.value)">
                    {{menuBottom.label}}
                </li>
            </ul>
        </div>
        <div class="content">
            <div
                class="content-list"
                v-for="item of homeDetails"
                :key="item.id">
                {{item.desc}}
            </div>
        </div>
        <div class="right-news">
            <div class="header">推荐沸点</div>
            <div class="pin-list">123</div>
            <div class="guide-link">
                <img class="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/guide-icon.6c1b9a0.svg" alt="1"/>
                <span class="title">如何玩转沸点</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PinsPage',
    props: {
        homeDetails: Array
    },
    data () {
        return {
            listSelect: 'recommend',
            pinsListTop: [{
                value: 'recommend',
                label: '推荐'
            }, {
                value: 'hot',
                label: '热门'
            }, {
                value: 'attention',
                label: '关注'
            }],
            pinsListBottom: [{
                value: 'openSource',
                label: '开源推荐'
            }, {
                value: 'interpolate',
                label: '内推招聘'
            }, {
                value: 'blindDate',
                label: '掘金相亲'
            }, {
                value: 'fish',
                label: '上班摸鱼'
            }, {
                value: 'application',
                label: '应用安利'
            }, {
                value: 'tool',
                label: '开发工具'
            }, {
                value: 'new',
                label: 'New资讯'
            }]
        }
    },
    methods: {
        selectChange (value) {
            this.listSelect = value
        }
    }
}
</script>

<style lang="scss" scoped>
.pins-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 960px;
    margin: 20px auto 72px;
    .left-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 88px;
        height: 100%;
        padding: 16px 12px;
        background: #fff;
        color: #909090;
        font-size: 15px;
        border-radius: 5px;
        .list-top, .list-bottom {
            display: flex;
            flex-direction: column;
            list-style-type: none;
            .list-child {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 3px 0;
                width: 87.95px;
                height: 30.95px;
                border-radius: 3px;
            }
            .list-select {
                background: #007fff;
                color: #fff;
            }
        }
        .list-top {
            border-bottom: 1px solid #909090;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        width: 570px;
        .content-list {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
            height: 100px;
            font-size: 50px;
            background: cornflowerblue;
        }
    }
    .right-news {
        width: 248px;
        .header {
            height: 17px;
            padding: 13px 16px;
            color: #2E3135;
            font-weight: bold;
            font-size: 15px;
            background: #fff;
            border-bottom: 1px solid hsla(0,0%,59.2%,.1);
        }
        .pin-list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100px;
            background: #fff;
        }
        .guide-link {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 5px 0;
            padding: 15.96px;
            height: 35.99px;
            background: #fff;
            .icon {
                margin: 0 9.96px 0 0;
            }
            .title {
                color: #2E3135;
                font-size: 14.04px;
            }
        }
    }
}
</style>
