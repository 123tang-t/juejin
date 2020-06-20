<template>
    <div class="home" @click="essayColse">
        <!-- 头部页面 -->
        <div class="auto-header">
            <transition name="header">
                <div class="header-under" v-show="show">
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
                            <div class="text">
                                <i class="el-icon-tickets"></i>
                                <span class="essay" @click.stop="chageEssay">写文章</span>
                            </div>
                            <div class="introduction-list" v-if="essay">
                                <h3 class="essay-title">来掘金写文章，您将有机会</h3>
                                <ul class="essay-list">
                                    <li class="list-children">与超过 300 万开发者分享您的经验和观点</li>
                                    <li class="list-children">被编辑推荐，获得更多曝光和关注</li>
                                    <li class="list-children">加入专栏作者群，结识众多优秀开发者</li>
                                </ul>
                                <el-button class="essay-button" type="success" @click.stop="registeredJump">开始写文章</el-button>
                            </div>
                            <div class="box" v-if="essay"></div>
                        </div>
                        <div class="auth">
                            <span class="sign" @click.stop="sign">
                                登录
                                <!-- &nbsp;· -->
                            </span>
                            <span @click.stop="registered">注册</span>
                        </div>
                    </div>
                </div>
            </transition>
            <!-- 头部下方菜单列表 -->
            <HeaderTitle v-show="changeDemo==='Welcome'||changeDemo==='Books'||changeDemo==='Events'"
                :changeDemo="changeDemo"
                :secondSelect="secondSelect"
                @switch="changePage"/>
        </div>
        <!-- 登录注册对话框 -->
        <SignRegistered
            :signRegistered="signRegistered"
            :loginToRegister="loginToRegister"
            @colse="dialogColse"/>
        <!-- 详情页面 -->
        <router-view
            :homeDetails="homeDetails"
            :headerSelect="headerSelect"
            :pinsDetails="pinsDetails"/>
        <!-- 右下角图标 -->
        <div class="footer">
            <div class="back-top" v-if="backTop">
                <i class="el-icon-caret-top"></i>
            </div>
            <div class="news">
                <i class="el-icon-chat-dot-round news-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/headerTitle.vue'
import SignRegistered from '@/components/signRegistered.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        HeaderTitle,
        SignRegistered
    },
    data () {
        return {
            show: true,
            select: '',
            headerSelect: '',
            changeDemo: '',
            input: '',
            secondSelect: 'recommend',
            detailsPage: 'recommend',
            essay: false,
            signRegistered: false,
            loginToRegister: '',
            // 接口数据页面
            page: 1,
            pageSize: 20,
            pageCount: 1,
            // 主页
            homeDetails: [],
            // 沸点
            pinsDetails: [],
            backTop: false,
            isLoadingData: false,
            list: [{
                value: 'Welcome',
                label: '首页',
                firstFont: 'recommend'
            }, {
                value: 'Pins',
                label: '沸点'
            }, {
                value: 'Topics',
                label: '话题'
            }, {
                value: 'Books',
                label: '小册',
                firstFont: 'all'
            }, {
                value: 'Events',
                label: '活动'
            }]
            // menus: [{
            //     id: '1',
            //     value: 'home',
            //     label: '首页',
            //     firstFont: 'recommend',
            //     router: '/welcome',
            //     children: [{
            //         id: '1-1',
            //         value: 'recommend',
            //         label: '推荐',
            //         router: '/welcome/recommend'
            //     }, {
            //         id: '1-2',
            //         value: 'realEnd',
            //         label: '后端',
            //         router: '/welcome/realEnd'
            //     }, {
            //         id: '1-3',
            //         value: 'frontEnd',
            //         label: '前端',
            //         router: '/welcome/frontEnd'
            //     }, {
            //         id: '1-4',
            //         value: 'android',
            //         label: 'Android',
            //         router: '/welcome/android'
            //     }, {
            //         id: '1-5',
            //         value: 'ios',
            //         label: 'iOS',
            //         router: '/welcome/ios'
            //     }, {
            //         id: '1-6',
            //         value: 'intelligent',
            //         label: '人工智能',
            //         router: '/welcome/intelligent'
            //     }]
            // }, {
            //     id: '2',
            //     value: 'boiling',
            //     label: '沸点'
            // }, {
            //     id: '3',
            //     value: 'topic',
            //     label: '话题'
            // }, {
            //     id: '4',
            //     value: 'booklet',
            //     label: '小册',
            //     firstFont: 'all'
            // }, {
            //     id: '5',
            //     value: 'activity',
            //     label: '活动'
            // }]
        }
    },
    mounted () {
        this.page = 1
        this.pageCount = 1
        this.select = this.$route.name
        this.changeDemo = this.$route.name
        this.getRecommendList()
        window.addEventListener('scroll', this.changeScroll)
    },
    methods: {
        // 切换页面
        change (value, font, router) {
            this.select = value
            this.changeDemo = value
            this.secondSelect = font
            this.page = 1
            this.pageCount = 1
            this.homeDetails = []
            this.pinsDetails = []
            this.getRecommendList()
            if (value === 'Welcome') {
                this.$router.push({
                    path: '/welcome'
                })
            }
            if (value === 'Pins') {
                this.$router.push({
                    path: '/pins'
                })
            }
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
            this.essay = !this.essay
        },
        registeredJump () {
            this.essay = false
            this.signRegistered = !this.signRegistered
            this.loginToRegister = 'registered'
        },
        essayColse () {
            this.essay = false
        },
        // 监听
        changeScroll (el) {
            const height = el.target.documentElement.scrollHeight - el.target.documentElement.scrollTop - el.target.documentElement.clientHeight
            const backHeight = el.target.documentElement.scrollTop - el.target.documentElement.clientHeight
            const headerChange = el.target.documentElement.scrollTop
            if (headerChange < 200) {
                this.show = true
            } else if (this.select === 'Welcome') {
                this.show = true
            } else {
                this.show = false
                this.headerSelect = this.$route.name
            }
            if (backHeight >= 0) {
                this.backTop = true
            } else {
                this.backTop = false
            }
            if (height < 10 && this.page + 1 <= this.pageCount && !this.isLoadingData) {
                this.page++
                console.log(this.page)
                this.isLoadingData = !this.isLoadingData
                this.getnewdata(this.page, this.pageSize)
            }
        },
        // 获取接口数据
        getRecommendList () {
            if (this.select === 'Welcome') {
                axios.get('http://119.23.250.47:6677/article/list?page=1&pageSize=20')
                    .then((result) => {
                        this.homeDetails = result.data.data.list
                        this.pageCount = result.data.data.pageCount
                    })
            }
            if (this.select === 'Pins') {
                axios.get('http://119.23.250.47:6677/message/list?page=1&pageSize=20')
                    .then((result) => {
                        this.pinsDetails = result.data.data.list
                        this.pageCount = result.data.data.pageCount
                    })
            }
        },
        // 滚动到底部加载数据
        getnewdata () {
            // axios.get('http://119.23.250.47:6677/article/list', {
            //     params: {
            //         page: this.page,
            //         pageSize: this.pageSize
            //     }
            // })
            //     .then((result) => {
            //         this.homeDetails = this.homeDetails.concat(result.data.data.list)
            //         this.isLoadingData = false
            //     })
            if (this.select === 'Welcome') {
                axios.get('http://119.23.250.47:6677/article/list?page=' + this.page + '&pageSize=' + this.pageSize)
                    .then((result) => {
                        this.homeDetails = this.homeDetails.concat(result.data.data.list)
                        this.isLoadingData = false
                    })
            }
            if (this.select === 'Pins') {
                console.log('123')
                axios.get('http://119.23.250.47:6677/message/list', {
                    params: {
                        page: this.page,
                        pageSize: this.pageSize
                    }
                })
                    .then((result) => {
                        this.pinsDetails = this.pinsDetails.concat(result.data.data.list)
                        this.isLoadingData = false
                    })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    width: 100vw;
    .auto-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        .header-enter-active, .header-leave-active {
            transition: opacity .3s;
        }
        .header-enter, .header-leave-to {
            opacity: 0;
        }
        .header-under {
            border-bottom: 1px solid #f4f5f5;
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    position: relative;
                    width: 70px;
                    height: 60px;
                    padding: 0 14.5px;
                    text-align: center;
                    font-size: 16px;
                    color: #007fff;
                    cursor: pointer;
                    .text {
                        // margin: 22px 0;
                        .essay {
                            height: 16px;
                            margin: 0 0 0 2px;
                            font-size: 16px;
                        }
                    }
                    .introduction-list {
                        position: absolute;
                        top: 60px;
                        left: -121px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 276px;
                        height: 179px;
                        padding: 30px 24px;
                        background: #fff;
                        color: #909090;
                        border-radius: 2px;
                        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
                        border: 1px solid rgba(178, 181, 187, .5);
                        z-index: 111;
                        cursor: default;
                        .essay-title {
                            width: 276px;
                            height: 16px;
                            margin: 0 0 24px;
                            text-align: center;
                            color: #000;
                            font-size: 16.8px;
                        }
                        .essay-list {
                            width: 252px;
                            margin: 0 0 0 24px;
                            color: #909090;
                            font-size: 13.2px;
                            .list-children {
                                height: 16px;
                                margin: 0 0 12px;
                                text-align: left;
                            }
                        }
                        .essay-button {
                            width: 168px;
                            // height: 43px;
                            margin: 24px 54px 0;
                        }
                    }
                    .box {
                        width: 10px;
                        height: 10px;
                        background: #fff;
                        position: absolute;
                        left: 32.5px;
                        top: 55px;
                        border: 1px solid rgba(178, 181, 187, .5);
                        border-right: none;
                        border-bottom: none;
                        transform: rotate(45deg);
                        z-index: 120;
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
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1000;
        .back-top, .news {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 12px 0 0;
            height: 40px;
            width: 40px;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #f1f1f1;
            box-shadow: 0 0 5px rgba(0, 0, 0, .05);
            cursor: pointer;
        }
        .back-top {
            font-size: 16px;
            color: #909090;
        }
        .news {
            color: #007fff;
        }
    }
}
</style>
