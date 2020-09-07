<template>
    <div class="home-details">
        <HeaderTitle/>
        <div class="desc">
            <div class="content-box"
                v-for="item of homeDetails"
                :key="item.id"
                @mousemove="changeShare(item.id)"
                @mouseleave="cancelShare(item.id)">
                <div class="content">
                    <div class="header">
                        <div class="item"><a href="">专栏</a></div>
                        <div class="item-author"><a href="">{{item.username}}</a></div>
                        <div class="item-tag"><a href="">{{item.category}}</a></div>
                    </div>
                    <div class="title"><a href="">{{item.title}}</a></div>
                    <div class="action-list">
                        <div class="like">
                            <a href="">
                                <img class="action-img1" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="">
                                <div class="number">{{item.lickCount}}</div>
                            </a>
                        </div>
                        <div class="info">
                            <a href="">
                                <img class="action-img" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" alt="">
                                <div class="number">{{item.commentCount}}</div>
                            </a>
                        </div>
                        <div class="share" v-show="select===item.id">
                            <img class="action-img" src="https://b-gold-cdn.xitu.io/v3/static/img/share.1d55e69.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="right-img">
                    <img src="../../assets/photo/sign1.jpg" alt="">
                </div>
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
            select: ''
        }
    },
    methods: {
        changeShare (id) {
            this.select = id
        },
        cancelShare () {
            this.select = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.home-details {
    height: 100%;
    .desc {
        display: flex;
        flex-direction: column;
        margin-top: 2px;
        height: 100%;
        background: #fff;
        cursor: pointer;
        .content-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 18px 24px;
            margin-top: 2px;
            height: 79px;
            border-bottom: 1px solid #f4f5f5;
            .content {
                .header {
                    display: flex;
                    flex-direction: row;
                    .item, .item-author,  .item-tag {
                        height: 15px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        font-size: 12px;
                        a {
                            text-decoration: none;
                        }
                    }
                    .item {
                        font-size: 12px;
                        font-weight: 500;
                        a {
                            color: #b71ed7;
                            font-size: 12px;
                            font-weight: 500;
                        }
                    }
                    .item-author, .item-tag {
                        margin-left: 5px;
                        a {
                            color: #B2BAC2;
                        }
                    }
                }
                .title {
                    margin: 6px 0 12px;
                    height: 20px;
                    font-weight: 600;
                    font-size: 16.8px;
                    a {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        color: #909090;
                        font-weight: bold;
                        text-decoration: none;
                    }
                }
                .action-list {
                    display: flex;
                    flex-direction: row;
                    list-style-type: none;
                    .like, .info, .share {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 0 9.6px;
                        border: 1px solid #eceeee;
                        a {
                            display: flex;
                            align-items: center;
                            color: #909090;
                            text-decoration: none;
                            .action-img1 {
                                width: 16px;
                                height: 16px;
                            }
                            .action-img {
                                width: 20px;
                                height: 20px;
                            }
                            .number {
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                margin-left: 2px;
                                font-size: 12.996px;
                            }
                        }
                    }
                    .like, .info {
                        width: 32.8px;
                        height: 24px;
                    }
                    .share {
                        width: 25.8px;
                        height: 24px;
                    }
                }
            }
            .right-img {
                display: flex;
                align-items: center;
                margin-left: 24px;
                img {
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }
}
</style>
