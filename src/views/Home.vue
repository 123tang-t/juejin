<template>
    <div class="home" @click="essayColse">
        <!-- 点击用户头像显示列表 -->
        <div
            class="menu-list"
            :style="location"
            v-if="menu">
            <ul class="list">
                <li class="list-child">
                    <img class="icon" src="../assets/imgs/list/1.png" alt="图标">
                    <span>写文章</span>
                </li>
                <li class="list-child">
                    <img class="icon" src="../assets/imgs/list/2.png" alt="图标">
                    <span>草稿</span>
                </li>
                <li class="list-child">
                    <img class="icon" src="../assets/imgs/list/3.png" alt="图标">
                    <span>设置</span>
                </li>
                <li class="list-child">
                    <img class="icon" src="../assets/imgs/list/4.png" alt="图标">
                    <span>关于</span>
                </li>
            </ul>
            <div class="out" @click="signOut">
                <img class="icon" src="../assets/imgs/list/out.png" alt="图标">
                <span>登出</span>
            </div>
        </div>
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
                        <!-- 未登录状态显示 -->
                        <div class="sign-out" v-if="!loginStatus">
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
                                    <el-button class="essay-button" type="success" @click.stop="registeredJump">
                                        开始写文章
                                    </el-button>
                                </div>
                                <div class="box" v-if="essay"></div>
                            </div>
                            <div class="auth">
                                <span class="sign" @click.stop="sign">
                                    登录
                                </span>
                                <span @click.stop="registered">注册</span>
                            </div>
                        </div>
                        <!-- 登陆状态显示 -->
                        <div class="sign-in" v-if="loginStatus">
                            <div class="essay">
                                <div class="add-ground">
                                    <div class="add-btn">
                                        <span @click="openMarkdown">写文章</span>
                                    </div>
                                    <div class="right-icon" @click.stop="unfold">
                                        <img class="icon" src="../../public/icon/drop.png" alt="下拉图标">
                                    </div>
                                    <div class="write-article" v-if="expandMerge">
                                        <ul class="list">
                                            <li class="list-item">发沸点</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="news">
                                <img class="news-icon" src="../../public/icon/news.png" alt="消息">
                            </div>
                            <div class="profile-picture">
                                <img
                                    class="picture"
                                    src="../assets/photo/sign1.jpg"
                                    alt="头像"
                                    @click.stop="openMenu">
                            </div>
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
            @colse="dialogColse"
            @login="loginAccount"
            @register="registerAccount"
            @openSign="openSign"
            @openRegistered="openRegistered"/>
        <!-- 详情页面 -->
        <router-view
            :loginStatus="loginStatus"
            :homeDetails="homeDetails"
            :headerSelect="headerSelect"
            :pinsDetails="pinsDetails"
            :booksDetails="booksDetails"
            :topicsDetails="topicsDetails"
            :eventsDetails="eventsDetails"
            :navFixed="navFixed"/>
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
            // 控制头部一级菜单状态
            show: true,
            // 登录状态
            loginStatus: false,
            menu: false,
            // 控制头部列表样式颜色
            select: '',
            headerSelect: '',
            changeDemo: '',
            input: '',
            secondSelect: 'recommend',
            detailsPage: 'recommend',
            essay: false,
            expandMerge: false,
            signRegistered: false,
            loginToRegister: '',
            // 改变页面左右列表的固定定位
            navFixed: false,
            // 接口数据页码
            page: 1,
            pageSize: 20,
            pageCount: 1,
            // 主页
            homeDetails: [],
            // 沸点
            pinsDetails: [],
            // 小册
            booksDetails: [],
            // 话题
            topicsDetails: [],
            // 活动
            eventsDetails: [],
            // 控制右下角图标显示隐藏
            backTop: false,
            // 控制滚动加载数据
            isLoadingData: false,
            screenwidth: document.documentElement.clientWidth,
            right: 0,
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
                label: '活动',
                firstFont: 'hotActivity'
            }]
        }
    },
    created () {
        this.computedLacation()
    },
    mounted () {
        this.page = 1
        this.pageCount = 1
        this.select = this.$route.name
        this.changeDemo = this.$route.name
        this.getRecommendList()
        window.addEventListener('scroll', this.changeScroll)
        // 当屏幕页面发生改变的时候触发该事件
        window.addEventListener('resize', this.resize)
    },
    computed: {
        location () {
            return {
                right: `${this.right}px`
            }
        }
    },
    methods: {
        // 计算右边距
        computedLacation () {
            var screenwidth = document.documentElement.clientWidth
            if (screenwidth < 960) {
                this.right = 0
                this.$message({
                    message: '当前视窗宽度小于960px',
                    type: 'warning'
                })
            } else {
                this.right = (screenwidth - 960) / 2
            }
        },
        // 窗口大小发生改变的时候触发
        resize () {
            var screenwidth = document.documentElement.clientWidth
            if (screenwidth < 960) {
                this.right = 0
                this.$message({
                    message: '当前视窗宽度小于960px',
                    type: 'warning'
                })
            } else {
                this.right = (screenwidth - 960) / 2
            }
        },
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
            if (value === 'Books') {
                this.$router.push({
                    path: '/books'
                })
            }
            if (value === 'Topics') {
                this.$router.push({
                    path: '/topics'
                })
            }
            if (value === 'Events') {
                this.$router.push({
                    path: '/events'
                })
            }
        },
        changePage (data) {
            this.detailsPage = data
            this.secondSelect = data
        },
        // 打开登陆页面
        sign () {
            this.signRegistered = !this.signRegistered
            this.loginToRegister = 'sign'
        },
        openRegistered () {
            this.signRegistered = true
            this.loginToRegister = 'registered'
        },
        // 打开注册页面
        registered () {
            this.signRegistered = !this.signRegistered
            this.loginToRegister = 'registered'
        },
        openSign () {
            this.signRegistered = true
            this.loginToRegister = 'sign'
        },
        // 账号登录
        loginAccount (accountMessage) {
            axios.post('/api/user/login', accountMessage)
                .then((result) => {
                    if (result.data.code !== 1) {
                        this.$message.error('账号密码错误')
                    } else {
                        this.signRegistered = false
                        this.loginToRegister = ''
                        this.getRecommendList()
                    }
                })
        },
        // 账号注册
        registerAccount (accountMessage) {
            axios.post('/api/user/register', accountMessage)
                .then((result) => {
                    if (result.data.code !== 1) {
                        this.$message.error('请输入完整的注册信息')
                    } else {
                        this.loginToRegister = 'sign'
                    }
                })
        },
        // 关闭登录注册页面
        dialogColse () {
            this.signRegistered = false
            this.loginToRegister = ''
        },
        openMenu () {
            this.menu = !this.menu
        },
        // 退出账号登录
        signOut () {
            axios.post('/api/user/logout')
            this.loginStatus = false
        },
        chageEssay () {
            this.essay = !this.essay
        },
        openMarkdown () {
            this.$router.push({
                path: '/marked'
            })
        },
        registeredJump () {
            this.essay = false
            this.signRegistered = !this.signRegistered
            this.loginToRegister = 'registered'
        },
        unfold () {
            this.expandMerge = !this.expandMerge
        },
        essayColse () {
            this.essay = false
            this.expandMerge = false
            this.menu = false
        },
        // 监听滚动状态
        changeScroll (el) {
            const height = el.target.documentElement.scrollHeight - el.target.documentElement.scrollTop - el.target.documentElement.clientHeight
            const backHeight = el.target.documentElement.scrollTop - el.target.documentElement.clientHeight
            const headerChange = el.target.documentElement.scrollTop
            // 头部在页面中是否隐藏
            if (headerChange < 200) {
                this.show = true
            } else if (this.select === 'Welcome') {
                this.show = true
            } else {
                this.show = false
                this.headerSelect = this.$route.name
            }
            // 控制左右列表的固定定位
            if (headerChange > 200) {
                this.navFixed = true
            } else {
                this.navFixed = false
            }
            // 控制右下角图标是否显示
            if (backHeight >= 0) {
                this.backTop = true
            } else {
                this.backTop = false
            }
            // 获取加载数据
            if (height < 10 && this.page + 1 <= this.pageCount && !this.isLoadingData) {
                this.page++
                this.isLoadingData = !this.isLoadingData
                this.getnewdata(this.page, this.pageSize)
            }
        },
        // 获取接口数据
        getRecommendList () {
            axios.get('/api/user/info').then((result) => {
                if (result.data.code === 1) {
                    this.loginStatus = true
                }
            })
            if (this.select === 'Welcome') {
                axios.get('/api/article/list?page=1&pageSize=20')
                    .then((result) => {
                        this.homeDetails = result.data.data.list
                        this.pageCount = result.data.data.pageCount
                    })
            }
            if (this.select === 'Pins') {
                axios.get('/api/message/list?page=1&pageSize=20')
                    .then((result) => {
                        this.pinsDetails = result.data.data.list
                        this.pageCount = result.data.data.pageCount
                    })
            }
            if (this.select === 'Books') {
                axios.get('/api/book/list?page=1&pageSize=20')
                    .then((result) => {
                        this.booksDetails = result.data.data.list
                        this.pageCount = result.data.data.pageCount
                    })
            }
            if (this.select === 'Topics') {
                axios.get('/mock/index.json')
                    .then((result) => {
                        this.topicsDetails = result.data.data.topic
                    })
            }
            if (this.select === 'Events') {
                axios.get('/api/activity/list?page=1&pageSize=20')
                    .then((result) => {
                        this.eventsDetails = result.data.data.list
                        this.pageCount = result.data.data.pageCount
                    })
            }
        },
        // 滚动到底部加载数据
        getnewdata () {
            if (this.select === 'Welcome') {
                axios.get('/api/article/list?page=' + this.page + '&pageSize=' + this.pageSize)
                    .then((result) => {
                        this.homeDetails = this.homeDetails.concat(result.data.data.list)
                        this.isLoadingData = false
                    })
            }
            if (this.select === 'Pins') {
                axios.get('/api/message/list', {
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
            if (this.select === 'Books') {
                axios.get('/api/book/list?page=' + this.page + '&pageSize=' + this.pageSize)
                    .then((result) => {
                        this.booksDetails = this.booksDetails.concat(result.data.data.list)
                        this.isLoadingData = false
                    })
            }
            if (this.select === 'Events') {
                axios.get('api/activity/list', {
                    params: {
                        page: this.page,
                        pageSize: this.pageSize
                    }
                })
                    .then((result) => {
                        this.eventsDetails = this.eventsDetails.concat(result.data.data.list)
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
    .menu-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 60px;
        // right: 0;
        width: 157.19px;
        height: 184px;
        color: #71777C;
        font-size: 18px;
        background: #fff;
        border: 1px solid #f4f5f5;
        z-index: 9999;
        .list {
            margin: 0;
            padding: 0;
            width: 100%;
            list-style-type: none;
            .list-child {
                padding: 6px 12px;
                text-align: left;
                cursor: pointer;
            }
            .list-child:nth-child(2), .list-child:nth-child(4) {
                border-bottom: 1px solid #f4f5f5;
            }
        }
        .out {
            width: 157.19px;
            padding: 6px;
            text-align: left;
            cursor: pointer;
            img {
                margin-left: 12px;
            }
        }
        .list .list-child .icon, .out .icon {
            margin-right: 10px;
            width: 18.73px;
            height: 18px;
        }
    }
    .auto-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 999;
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
                .sign-out {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
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
                .sign-in {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    position: relative;
                    .essay {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0 14.4px;
                        height: 60px;
                        width: 79.58px;
                        .add-ground {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            height: 32px;
                            width: 79.58px;
                            color: #fff;
                            border-radius: 3px;
                            cursor: pointer;
                            .add-btn {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: 0 10.8px;
                                width: 41.99px;
                                height: 32px;
                                font-size: 14px;
                                background: #007fff;
                            }
                            .right-icon {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                // margin-left: 0.1px;
                                width: 16px;
                                height: 32px;
                                background: #007fff;
                                .icon {
                                    width: 16px;
                                    height: 16px;
                                }
                            }
                            .write-article {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                position: absolute;
                                top: 32px;
                                left: 0;
                                padding: 5px 0;
                                width: 79.59px;
                                height: 28px;
                                background: #fff;
                                border: 1px solid #ebebeb;
                                border-radius: 2px;
                                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
                                .list {
                                    list-style-type: none;
                                    .list-item {
                                        padding-left: 9.6px;
                                        color: #3B76C5;
                                        font-size: 14.004px;
                                    }
                                }
                            }
                        }
                    }
                    .news {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 45.28px;
                        height: 60px;
                        .news-icon {
                            width: 20px;
                            height: 20px;
                        }
                    }
                    .profile-picture {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-left: 14.4px;
                        width: 29.99px;
                        height: 60px;
                        .picture {
                            width: 30px;
                            height: 30px;
                            background: #EEEEEE;
                        }
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
