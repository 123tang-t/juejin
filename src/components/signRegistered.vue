<template>
    <div class="sign-registered" v-if="signRegistered">
        <!-- 登录对话框 -->
        <div class="sign-in" v-if="loginToRegister==='sign'">
            <div class="sign-title">
               <h3>登录</h3>
               <i class="el-icon-close close" @click="colseBox"></i>
            </div>
            <el-input
                class="dialog-input"
                v-model="input"
                placeholder="请输入手机号或者邮箱">
            </el-input>
            <el-input
                class="dialog-input"
                v-model="input"
                placeholder="请输入密码">
            </el-input>
            <el-button class="sign-button" type="primary">登录</el-button>
            <div class="prompt-box">
                <span>没有账号？</span>
                <a class="chickable" href="">注册</a>
                <a class="right-chickable" href="">忘记密码</a>
            </div>
            <div class="agreement-box">
                <span>注册登录即表示同意</span>
                <a class="" href="">用户协议&nbsp;、</a>
                <a class="" href="">隐私政策</a>
            </div>
            <div class="third-party">
                <a href="">第三方登录</a>
            </div>
        </div>
        <!-- 注册对话框 -->
        <div class="registered" v-if="loginToRegister==='registered'">
            <div class="registered-title">
               <h3>注册</h3>
               <i class="el-icon-close close" @click="colseBox"></i>
            </div>
            <el-input
                class="dialog-input"
                v-model="input"
                placeholder="请输入用户名">
            </el-input>
            <el-input
                class="dialog-input"
                v-model="input"
                placeholder="请输入手机号">
            </el-input>
            <el-input
                class="dialog-input"
                v-model="input"
                placeholder="请输入密码（不少于6位）">
            </el-input>
            <el-button class="registered-button" type="primary">注册</el-button>
            <div class="prompt-box">
                <a class="chickable" href="">已有账号登录</a>
            </div>
            <div class="agreement-box">
                <span>注册登录即表示同意</span>
                <a class="" href="">用户协议&nbsp;、</a>
                <a class="" href="">隐私政策</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signRegistered',
    props: {
        signRegistered: Boolean,
        loginToRegister: String
    },
    data () {
        return {
            input: ''
        }
    },
    methods: {
        colseBox () {
            this.$emit('colse')
        }
    }
}
</script>

<style scoped lang="scss">
.sign-registered {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 999;
    // 登录对话框样式
    .sign-in {
        width: 270px;
        height: 297px;
        padding: 24px;
        background: #fff;
        .sign-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 24px;
            h3 {
                color: #333333;
                font-size: 18px;
            }
        }
        .dialog-input {
            margin: 0 0 10px;
        }
        .sign-button {
            width: 270px;
            margin: 5px 0 0;
        }
        .prompt-box {
            height: 18px;
            line-height: 18px;
            margin: 12px 0 0;
            color: #767676;
            font-size: 14px;
            .chickable, .right-chickable {
                text-decoration: none;
                color: #007FFF;
            }
            .chickable {
                margin: 0 0 0 2px;
            }
            .right-chickable {
                margin: 0 0 0 108px;
            }
        }
        .agreement-box {
            height: 18px;
            line-height: 18px;
            margin: 20px 0 0;
            color: #767676;
            font-size: 14px;
            a {
                text-decoration: none;
                color: #007FFF;
            }
        }
        .third-party {
            height: 18px;
            line-height: 18px;
            margin: 20px 0 0;
            font-size: 14px;
            a {
                text-decoration: none;
                color: #767676;
            }
        }
    }
    // 注册对话框样式
    .registered {
        width: 270px;
        height: 307px;
        padding: 24px;
        background: #fff;
        .registered-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 24px;
            h3 {
                color: #333333;
                font-size: 18px;
            }
        }
        .dialog-input {
            margin: 0 0 10px;
        }
        .registered-button {
            width: 270px;
            margin: 5px 0 0;
        }
        .prompt-box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 18px;
            line-height: 18px;
            margin: 12px 0 0;
            color: #767676;
            font-size: 14px;
            .chickable{
                text-decoration: none;
                color: #007FFF;
            }
        }
        .agreement-box {
            height: 18px;
            line-height: 18px;
            margin: 20px 0 0;
            color: #767676;
            font-size: 14px;
            a {
                text-decoration: none;
                color: #007FFF;
            }
        }
    }
}
</style>
