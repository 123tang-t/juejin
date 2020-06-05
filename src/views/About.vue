<template>
    <div class="boil">
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
        <!-- 登录注册对话框 -->
        <SignRegistered
            :signRegistered="signRegistered"
            :loginToRegister="loginToRegister"
            @colse="dialogColse"/>
    </div>
</template>

<script>
export default {
    name: 'boil'
}
</script>

<style lang="scss" scoped>
.boil {
    .header-under {
        background: #fff;
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
</style>