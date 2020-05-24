<template>
    <div class="home">
        <div class="header-under">
            <div class="header">
                <div class="header-logo">
                    <img class="logo-img" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金">
                </div>
                <ul class="header-nav">
                    <li
                        v-for="menu of list"
                        :key="menu.value"
                        :class="[select===menu.value?'select':'', 'nav-children']"
                        @click="change(menu.value, menu.firstFont)">
                        {{menu.label}}
                    </li>
                </ul>
                <div class="search">
                    <el-input
                        size="small"
                        class="search-input"
                        v-model="input"
                        suffix-icon="el-icon-search"
                        placeholder="请输入内容">
                    </el-input>
                </div>
                <div class="write-essay">
                    <i class="el-icon-tickets"></i>
                    <span class="essay" @click="chageEssay">写文章</span>
                    <div class="introduction-list" v-if="essay">
                        <h3 class="essay-title">来掘金写文章，您将有机会</h3>
                        <ul class="essay-list">
                            <li>与超过 300 万开发者分享您的经验和观点</li>
                            <li>被编辑推荐，获得更多曝光和关注</li>
                            <li>加入专栏作者群，结识众多优秀开发者</li>
                        </ul>
                        <el-button type="success">开始写文章</el-button>
                    </div>
                </div>
                <div class="auth">
                    <span class="sign" @click.stop="sign">
                        登入
                        <!-- &nbsp;· -->
                    </span>
                    <span @click.stop="registered">注册</span>
                </div>
            </div>
        </div>
        <!-- 登入注册对话框 -->
        <SignRegistered
            :signRegistered="signRegistered"
            :loginToRegister="loginToRegister"
            @colse="dialogColse"/>
        <HeaderTitle v-show="changeDemo==='home'||changeDemo==='booklet'"
            :changeDemo="changeDemo"
            :secondSelect="secondSelect"
            @switch="changePage"/>
        <div class="details">
            <HomePage v-show="changeDemo==='home'" :detailsPage="detailsPage"/>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/headerTitle.vue'
import HomePage from '@/components/detailshome/homePage.vue'
import SignRegistered from '@/components/signRegistered.vue'

export default {
    name: 'Home',
    components: {
        HeaderTitle,
        HomePage,
        SignRegistered
    },
    data () {
        return {
            select: 'home',
            changeDemo: 'home',
            input: '',
            secondSelect: 'recommend',
            detailsPage: 'recommend',
            essay: false,
            signRegistered: false,
            loginToRegister: '',
            list: [{
                value: 'home',
                label: '首页',
                firstFont: 'recommend'
            }, {
                value: 'boiling',
                label: '沸点'
            }, {
                value: 'topic',
                label: '话题'
            }, {
                value: 'booklet',
                label: '小册',
                firstFont: 'all'
            }, {
                value: 'activity',
                label: '活动'
            }]
        }
    },
    methods: {
        // 改变标题
        change (value, font) {
            this.select = value
            this.changeDemo = value
            this.secondSelect = font
        },
        changePage (data) {
            this.detailsPage = data
            this.secondSelect = data
        },
        sign () {
            this.signRegistered = !this.signRegistered
            this.loginToRegister = 'sign'
        },
        registered () {
            this.signRegistered = !this.signRegistered
            this.loginToRegister = 'registered'
        },
        dialogColse () {
            this.signRegistered = false
            this.loginToRegister = ''
        },
        chageEssay () {
            this.essay = true
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    .header-under {
        background: #fff;
        // border-bottom: 1px solid #71777C;
        .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            max-width: 960px;
            height: 60px;
            margin: 0 auto;
            .header-logo {
                width: 98px;
                height: 50px;
                line-height: 50px;
                margin: 0 24px 0 0;
                .logo-img {
                    width: 98px;
                    height: 50px;
                }
            }
            .select {
                color: #007fff;
            }
            .header-nav {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 60px;
                color: #71777C;
                line-height: 60px;
                list-style-type: none;
                .nav-children {
                    text-align: center;
                    flex-grow: 1;
                    height: 60;
                    font-size: 16px;
                }
            }
            .search {
                flex-grow: 5;
                position: relative;
                height: 60px;
                padding: 0 15px;
                .search-input {
                    position: absolute;
                    max-width: 156px;
                    right: 15px;
                    bottom: 14px;
                }
            }
            .write-essay {
                position: relative;
                width: 70px;
                height: 60px;
                line-height: 60px;
                padding: 0 14.5px;
                text-align: center;
                font-size: 16px;
                color: #007fff;
                cursor: pointer;
                .essay {
                    margin: 0 0 0 2px;
                }
                .introduction-list {
                    position: absolute;
                    top: 60px;
                    left: -154px;
                    display: flex;
                    flex-direction: column;
                    // justify-content: center;
                    align-items: center;
                    width: 298px;
                    height: 181px;
                    padding: 30px 24px;
                    background: #fff;
                    color: #909090;
                    border-radius: 2px;
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
                    border: 1px solid rgba(178, 181, 187, .5);
                    z-index: 800px;
                    cursor: default;
                    .essay-title {
                        height: 16px;
                        margin: 0 0 24px;
                        text-align: center;
                        color: #000;
                        font-size: 15px;
                        .ul.li {
                            height: 16px;
                            margin: 0 0 16px;
                            font-size: 13.2px;
                        }
                    }
                }
            }
            .auth {
                width: 80px;
                height: 60px;
                line-height: 60px;
                padding: 0 0 0 14.5px;
                text-align: center;
                font-size: 16px;
                color: #007fff;
                cursor: pointer;
                .sign::after {
                    content: "·";
                    width: 1.84px;
                    height: 17px;
                    margin: 0 2px;
                    font-size: 10px;
                }
            }
        }
    }
}
</style>
