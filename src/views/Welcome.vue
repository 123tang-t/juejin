<template>
    <div class="home-page">
        <!-- <div class="nav">123</div> -->
        <div class="details-page">
            <div class="details-desc">
                <HomeDetails :homeDetails="homeDetails"/>
            </div>
            <div class="contents">
                <div class="sign-in" v-if="!loginStatus">
                    <div class="title">
                        <p class="title-name">掘金-juejin.im</p>
                        <p class="desc">一个帮助开发者成长的社区</p>
                    </div>
                    <div class="input">
                        <input class="input-children" type="text" name="username" placeholder="用户名" v-model="username">
                        <input class="input-children" type="text" name="phonenumber" placeholder="手机号" v-model="phonenumber">
                        <input class="input-children" type="text" name="password" placeholder="密码（不少于6位）" v-model="password">
                    </div>
                    <el-button class="sign-button" size="small" type="primary">立即注册</el-button>
                    <div class="protocol">
                        注册登入即表示<br>同意<a href="">用户协议</a>、<a href="">隐私政策</a>
                    </div>
                </div>
                <div class="author-list" v-if="loginStatus">
                    <div class="title">作者榜</div>
                    <div class="list-item" v-for="message of authorMessage" :key="message.id">
                        <img class="author-avater" :src="message.ingUrl" :alt="message.id">
                        <div class="desc">
                            <div class="title">{{message.name}}</div>
                            <div class="job">{{message.job}}</div>
                            <div class="field">{{message.field}}</div>
                        </div>
                    </div>
                    <div class="all-author">
                        完整榜单<i class="el-icon-arrow-right"></i>
                    </div>
                </div>
                <div class="hot-label">
                    <div class="label">热门标签</div>
                    <a class="view-all" type="primary" :underline="false">查看全部</a>
                </div>
                <div class="hot-list">
                    <div class="list-children" v-for="item of hotList" :key="item.id">
                        <p>{{item.label}}</p>
                    </div>
                </div>
                <div class="client">
                    <img class="qr-code" src="https://b-gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png" alt="二维码"/>
                    <div class="content-box">
                        <div class="headline">下载掘金客户端</div>
                        <div class="desc">一个帮助开发者成长的社区</div>
                    </div>
                </div>
                <div class="footer-details">
                    <div class="title">关注我们</div>
                    <div class="icon">
                        <div class="icon-children" v-for="item of iconList" :key="item.id">
                            <img :src="item.url" :alt="item.id"/>
                        </div>
                    </div>
                    <div class="desc">
                        <a href="">关于&nbsp;·</a>
                        <a href="">招聘&nbsp;·</a>
                        <a href="">商务合作&nbsp;·</a>
                        <a href="">友情链接</a>
                    </div>
                    <div class="desc">
                        <a href="">用户协议&nbsp;·</a>
                        <a href="">隐私政策</a>
                    </div>
                    <div class="desc">
                        <span>©2020 掘金</span>
                    </div>
                    <div class="desc">
                        <a href="">Powered by QingCloud</a>
                    </div>
                    <div class="desc">
                        <a href="">津ICP备15003202号-2</a>
                    </div>
                    <div class="desc">
                        <a href="">京公网安备11010802026719号</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeDetails from '@/components/detailshome/homeDetails.vue'

export default {
    name: 'HeaderTitle',
    props: {
        detailsPage: String,
        homeDetails: Array,
        loginStatus: Boolean
    },
    components: {
        HomeDetails
    },
    data () {
        return {
            input: '',
            username: '',
            phonenumber: '',
            password: '',
            hotList: [{
                id: '01',
                label: '架构'
            }, {
                id: '02',
                label: '开源'
            }, {
                id: '03',
                label: '算法'
            }, {
                id: '04',
                label: 'GitHub'
            }],
            iconList: [{
                id: '01',
                url: 'https://b-gold-cdn.xitu.io/v3/static/img/weibo.0cd39f5.png'
            }, {
                id: '02',
                url: 'https://b-gold-cdn.xitu.io/v3/static/img/wechat.ce329e6.png'
            }, {
                id: '03',
                url: 'https://b-gold-cdn.xitu.io/v3/static/img/zhuanlan.18265c6.png'
            }, {
                id: '04',
                url: 'https://b-gold-cdn.xitu.io/v3/static/img/jianshu.80c1fdd.png'
            }],
            authorMessage: [{
                id: '01',
                imgUrl: 'https://leancloud-gold-cdn.xitu.io/lcWmtTP99VzRCRSXDeIWQ2C?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                name: 'BeSill',
                job: '全栈打杂',
                field: 'Vue.js领域贡献者'
            }, {
                id: '02',
                imgUrl: 'https://user-gold-cdn.xitu.io/2019/7/8/16bcfe065d245536?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                name: '多肉邦',
                job: '前端开发',
                field: '前端领域贡献者'
            }, {
                id: '03',
                imgUrl: 'https://user-gold-cdn.xitu.io/2019/5/17/16ac563fb4ad22db?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                name: '卡萨布兰卡卡',
                job: '前端',
                field: 'React.js、前端、JavaScript 领域贡献者'
            }]
        }
    }
}
</script>

<style scoped lang="scss">
.home-page {
    max-width: 960px;
    margin: 120px auto 0;
    .nav {
        height: 36px;
        background: #fff;
    }
    .details-page {
        display: flex;
        flex-direction: row;
        margin-top: 1px;
        .details-desc {
            width: 700px;
        }
        .contents {
            flex-grow: 1;
            margin-left: 20px;
            .sign-in {
                width: 210px;
                margin: 0 0 18px;
                padding: 15px;
                background: #fff;
                .title {
                    .title-name {
                    margin: 0 0 6px;
                    font-size: 14px;
                    font-weight: bold;
                    }
                    .desc {
                        margin: 0 0 6px;
                        font-size: 14px;
                    }
                }
                .input {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 0 0 10px;
                    height: 120px;
                    .input-children {
                        width: 195px;
                        height: 25px;
                        margin-right: 15px;
                        padding: 4px 7px;
                        color: #71777C;
                        background: #fbfbfb;
                        border: 1px solid #f4f4f4;
                        border-radius: 2px;
                        outline: none;
                    }
                }
                .sign-button {
                    width: 210px;
                    margin: 0 0 20px;
                    font-size: 14px;
                }
                .protocol {
                    color: #71777C;
                    font-size: 14px;
                    a {
                        color: #007fff;
                        text-decoration: none;
                    }
                }
            }
            .author-list {
                margin-bottom: 10px;
                width: 240px;
                height: 318.7px;
                background: #fff;
                .title {
                    padding: 12px 15.6px;
                    height: 17px;
                    color: #333333;
                    font-size: 13.92px;
                    border-bottom: 1px solid #f4f5f5;
                }
                .list-item {
                    display: flex;
                    flex-direction: row;
                    padding: 12px 15.6px;
                    height: 54.23px;
                    .author-avater {
                        margin-right: 9.6px;
                        width: 45.59px;
                        height: 45.59px;
                        background: #EEEEEE;
                    }
                    .desc {
                        display: flex;
                        flex-direction: column;
                        width: 153.21px;
                        .title {
                            padding: 0;
                            height: 18px;
                            color: #333333;
                            font-size: 13.92px;
                            font-weight: 400;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            border: none;
                        }
                        .job, .field {
                            margin-bottom: 3px;
                            height: 15px;
                            color: #909090;
                            font-size: 12px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
                .all-author {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 12px 0;
                    height: 17px;
                    color: #007fff;
                    font-size: 13.92px;
                    font-weight: 500;
                    border-top: 1px solid #f4f5f5;
                }
            }
            .hot-label {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-content: center;
                width: 210px;
                margin: 0 0 1px;
                padding: 15px;
                background: #fff;
                .label {
                    font-size: 14px;
                }
                .view-all {
                    text-decoration: none;
                    color: #007fff;
                    font-size: 12px;
                }
            }
            .hot-list {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 210px;
                padding: 15px;
                background: #fff;
                .list-children {
                    height: 30px;
                    line-height: 30px;
                    margin: 0 12px 12px 0;
                    padding: 0 22px;
                    cursor: pointer;
                    color: #333333;
                    font-size: 12px;
                    text-align: center;
                    background: #f3f6f3;
                    border-radius: 30px;
                    &:hover {
                        background: rgb(26, 244, 252);
                    }

                }
            }
            .client {
                display: flex;
                flex-direction: row;
                align-content: center;
                width: 210px;
                margin: 15px 0 10px;
                padding: 15px;
                background: #fff;
                .qr-code {
                    width: 50px;
                    height: 50px;
                    margin: 0 6px 0 0;
                }
                .content-box {
                    width: 144px;
                    height: 39px;
                    .headline {
                        font-size: 14px;
                        color: #333333;
                    }
                    .desc {
                        font-size: 12px;
                        margin: 6px 0 0;
                        color: #909090;
                    }
                }
            }
            .footer-details {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 210px;
                padding: 15px;
                .title {
                    height: 15px;
                    color: #909090;
                    font-size: 12px;
                }
                .icon {
                    display: flex;
                    flex-direction: row;
                    height: 27px;
                    margin: 12px 0;
                    .icon-children {
                        img {
                            flex-grow: 1;
                            width: 24px;
                            height: 24px;
                            margin: 0 6px;
                        }
                    }
                }
                .desc {
                    height: 16px;
                    margin: 0 0 4px;
                    color: #909090;
                    font-size: 13px;
                    a {
                        text-decoration: none;
                        color: #909090;
                        &:hover {
                            color: #007fff;
                        }
                    }
                }
            }
        }
    }
}
</style>
