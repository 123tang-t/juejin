<template>
    <div class="dialog" v-if="signRegistered">
        <!-- 注册 -->
        <el-dialog
            title="注册"
            :visible.sync="loginToRegister"
            width="50%"
            :modal="true"
            :modal-append-to-body="false">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
</template>

<script>
export default {
    name: 'ElementDialog',
    props: {
        signRegistered: Boolean,
        loginToRegister: Boolean
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
}
</style>
