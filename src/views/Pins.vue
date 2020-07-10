<template>
    <div :class="[headerSelect==='pins'?'pins-select':'', 'pins-page']">
        <!-- 左边菜单栏 -->
        <div :class="[navFixed?'nav-select':'', 'left-nav']">
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
        <!-- 内容区域 -->
        <div class="pins">
            <div
                class="content-list"
                v-for="pins of pinsDetails"
                :key="pins.id">
                <div class="pins-header">
                    <div class="left-title">
                        <img class="avatar" src="../assets/photo/sign2.jpg" alt="头像"/>
                        <div class="info-desc">
                            <div class="title">{{pins.username}}{{pins.id}}</div>
                            <div class="meta-box">
                                <span class="ellipsis">{{pins.job}}</span>
                                <span class="symbol" v-if="pins.company">&nbsp;@</span>
                                <span class="high">{{pins.company}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right-attention">关注</div>
                </div>
                <div class="content-box">{{pins.content}}</div>
                <div class="pins-imge">
                    <img src="" alt=""/>
                </div>
                <div class="pins-topic">
                    <div class="topic-title">{{pins.topic}}</div>
                </div>
                <div class="pins-icon">
                    <div class="like-action">
                        <img class="icon-img" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="1">
                        <span class="icon-number">{{pins.likeCount}}</span>
                    </div>
                    <div class="comment-action">
                        <img class="icon-img" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" alt="1">
                        <span class="icon-number">{{pins.commentCount}}</span>
                    </div>
                    <div class="share-action">
                        <img class="icon-img" src="https://b-gold-cdn.xitu.io/v3/static/img/share.1d55e69.svg" alt="1">
                    </div>
                </div>
            </div>
        </div>
        <!-- 右边信息栏 -->
        <div :class="[navFixed?'nav-right':'', 'right-news']">
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
        pinsDetails: Array,
        headerSelect: String,
        navFixed: Boolean
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
.pins-select {
    margin: 20px auto 72px;
}
.pins-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 960px;
    margin: 80px auto 72px;
    .left-nav {
        position: fixed;
        top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 88px;
        // height: 100%;
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
    .nav-select {
        position: fixed;
        top: 15px;
    }
    .pins {
        display: flex;
        flex-direction: column;
        margin: 0 0 0 127px;
        width: 570px;
        .content-list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 0 5px;
            width: 570px;
            background: #fff;
            border-radius: 2px;
            .pins-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 16px 24px 0 20px;
                height: 48px;
                .left-title {
                    display: flex;
                    flex-direction: row;
                    .avatar {
                        width: 45px;
                        height: 45px;
                        background: #eeeeee;
                        border-radius: 50%;
                    }
                    .info-desc {
                        display: flex;
                        flex-direction: column;
                        margin: 0 0 0 12px;
                        .title {
                            font-size: 15px;
                            color: #2E3135;
                            font-weight: 600;
                            font-size: 15px;
                        }
                        .meta-box {
                            display: flex;
                            flex-direction: row;
                            margin: 3.6px 0 0 ;
                            font-size: 13px;
                            color: #8a9aa9;
                            cursor: default;
                            .symbol, .high {
                                margin: 0 0 0 3px;
                            }
                        }
                }
                }
                .right-attention {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 55px;
                    height: 26px;
                    font-size: 13px;
                    border: 1px solid #6cbd45;
                    color: #6cbd45;
                }
            }
            .content-box {
                margin: 0 auto;
                width: 444.61px;
                font-size: 15px;
                white-space: pre-wrap;
                color: #17181a;
                overflow: hidden;
            }
            .pins-imge {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 444.61px;
                img {
                    margin: 4px 4px 0 0;
                    // width: 109.98px;
                    // height: 109.98px;
                }
            }
            .pins-topic {
                margin: 7.992px 48px 0 70.4px;
                width: 444.61px;
                height: 24px;
                .topic-title {
                    display: inline-block;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 78px;
                    height: 22px;
                    font-size: 13px;
                    color: #007fff;
                    border: 1px solid #007fff;
                    border-radius: 14px;
                    user-select: none
                }
            }
            .pins-icon {
                display: flex;
                flex-direction: row;
                margin: 10px 0 0;
                width: 570px;
                height: 34px;
                cursor: pointer;
                .like-action, .comment-action, .share-action {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 32px;
                    border: 1px solid #f4f5f5;
                    border-bottom: none;
                    .icon-img {
                        height: 18px;
                        width: 18px;
                    }
                    .icon-number {
                        margin: 0 0 0 3.9px;
                        font-size: 13px;
                    }
                }
            }
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
    .nav-right {
        margin-left: 712px;
        position: fixed;
        top: 15px;
    }
}
</style>
