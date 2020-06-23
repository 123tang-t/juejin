<template>
    <div class="books-page">
        <div class="books-list">
            <div class="books-content" v-for="books of booksDetails" :key="books.id">
                <img :src="books.img" :alt="books.id" class="books-img"/>
                <div class="introduction-details">
                    <div class="head">
                        <div class="presale" v-if="books.isAdvanceSale">预售</div>
                        <div class="title">{{books.title}}</div>
                    </div>
                    <div class="desc">{{books.desc}}</div>
                    <div class="author">
                        <img src="https://user-gold-cdn.xitu.io/2019/1/11/1683a78ae7d12c82?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="头像" class="avatar"/>
                        <div class="user-name">{{books.username}}</div>
                        <div class="level">
                            <span>LV{{books.level}}</span>
                        </div>
                        <div class="profile">{{books.profile}}</div>
                    </div>
                    <div class="other">
                        <div class="price-text">
                            <span>&nbsp;¥{{books.price}}</span>
                        </div>
                        <div class="chapter-number">{{books.section}}小节</div>
                        <div class="symbol">.</div>
                        <div class="read-time">阅读时长{{books.contentSize}}秒</div>
                        <div class="symbol">.</div>
                        <div class="buy-number">{{books.buyCount}}人已购买</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-section">
            <div class="announcement-content">
                <img class="announcement-img" src="https://b-gold-cdn.xitu.io/v3/static/img/announcement.a57241c.png" alt="公告">
                <span class="announcement-desc">小册下线分销提现公告</span>
            </div>
            <div class="slogan">
                <span class="title">掘金小册是什么?</span>
                <span class="desc">一个小篇幅、高浓度、成体系、<br>有收益的技术学习平台</span>
            </div>
            <div class="wechat-qr">
                <div class="title">关注公众号 领取优惠码</div>
                <div class="qr-img"></div>
            </div>
            <div class="section-help">
                <div class="author">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/author.c5d975e.png" alt="作者"/>
                    <span class="desc">成为作者</span>
                </div>
                <div class="feedback">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/feedback.1230fb5.png" alt="反馈"/>
                    <span class="desc">建议反馈</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BooksPage',
    props: {
        booksDetails: Array
    }
}
</script>

<style lang="scss" scoped>
.books-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 960px;
    margin: 120px auto 50px;
    .books-list {
        display: flex;
        flex-direction: column;
        width: 700px;
        background: #fff;
        cursor: pointer;
        .books-content {
            display: flex;
            flex-direction: row;
            padding: 25px;
            width: 700px;
            height: 141px;
            border: 1px solid #f4f5f5;
            .books-img {
                width: 100px;
                height: 140px;
            }
            .introduction-details {
                display: flex;
                flex-direction: column;
                padding-left: 22px;
                width: 528px;
                height: 140px;
                .head {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    height: 25px;
                    .presale {
                        display: flex;
                        align-items: center;
                        margin: -3px 8px 0 0;
                        padding: 0 6px;
                        height: 20px;
                        color: #fff;
                        font-size: 12px;
                        background: #ED7B11;
                    }
                    .title {
                        height: 25px;
                        color: #2E3135;
                        font-size: 20px;
                    }
                }
                .desc {
                    margin: 5px 0 0 0;
                    height: 20px;
                    color: #71777C;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .author {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin: 6px 0 0;
                    height: 26px;
                    .avatar {
                        margin: 0 8px 0 0;
                        width: 26px;
                        height: 26px;
                        background: #EEEEEE;
                        border-radius: 50%;
                    }
                    .user-name {
                        height: 20.45px;
                        color: #000;
                        font-size: 15px;
                    }
                    .level {
                        margin: 0 0 0 3.96px;
                        height: 19px;
                        font-size: 12px;
                        span {
                            background: #93c9f5;
                        }
                    }
                    .profile {
                        margin: 0 10px;
                        height: 18px;
                        color: #71777C;
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .other {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin: 6px 0 0;
                    height: 23px;
                    .price-text {
                        color: #ED7B11;
                        font-size: 18px;
                    }
                    .chapter-number, symbol, .read-time, .buy-number {
                        height: 16px;
                        color: #71777C;
                        font-size: 13px;
                    }
                    .chapter-number {
                        margin: 0 0 0 10px;
                    }
                    .symbol {
                        display: flex;
                        align-items: center;
                        margin: 0 6px;
                    }
                }
            }
        }
    }
    .sticky-section {
        margin: 0 0 0 20px;
        width: 240px;
        .announcement-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 15px 16px;
            background: #fff;
            cursor: pointer;
            .announcement-img {
                width: 30.77px;
                height: 32px;
            }
            .announcement-desc {
                margin: 0 0 0 10px;
                height: 18px;
                color: #000;
                font-size: 14px;
            }
        }
        .slogan {
            display: flex;
            flex-direction: column;
            margin: 10px 0 0;
            padding: 15px 16px;
            background: #fff;
            border: 1px solid #f4f5f5;
            .title {
                color: #000;
                font-size: 15px;
            }
            .desc {
                margin: 8px 0 0;
                color: #646464;
                font-size: 14px;
            }
        }
        .wechat-qr {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            height: 123px;
            background: #fff;
            .title {
                white-space: pre-wrap;
                color: #333333;
                font-size: 15px;
            }
            .qr-img {
                margin-top: 9px;
                height: 95px;
                background: url(https://b-gold-cdn.xitu.io/v3/static/img/wechat-qr.f1926e7.png) no-repeat center 0;
                background-size: contain;
                border-radius: 2px;
            }
        }
        .section-help {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            height: 90px;
            background: #fff;
            cursor: pointer;
            .author, .feedback {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    width: 37.33px;
                    height: 28px;
                }
                .desc {
                    margin: 8px 0 0;
                    height: 18px;
                    color: #71777B;
                    font-size: 14px;
                }
            }
            .author {
                border-right: 1px solid #f4f5f5;
            }
        }
    }
}
</style>
