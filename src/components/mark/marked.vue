<template>
    <div class="markdown">
        <div class="header">
            <div class="title">
                <el-input
                    class="mark-title-input"
                    v-model="title"
                    placeholder="输入文章标题">
                </el-input>
            </div>
            <div class="button-groud">
                <el-button type="primary">保存</el-button>
                <el-button type="primary">发表</el-button>
            </div>
        </div>
        <div class="area">
            <div class="content-area">
                <div class="edit-area">
                    <div class="edit">
                        <!-- <el-input
                            class="textarea"
                            type="textarea"
                            :autosize="{minRows:2, maxRows:100}"
                            placeholder="开始写作"
                            v-model="textarea"
                            @input="markdown">
                        </el-input> -->
                        <textarea
                            name="textarea"
                            id="textarea"
                            class="textarea"
                            :style="location"
                            placeholder="开始写作"
                            v-model="textarea"
                            @input="markdown">
                        </textarea>
                    </div>
                </div>
                <div class="marked-area">
                    <div class="marked" v-html="markedContent"></div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="editor">
                <img class="fast" src="@/assets/photo/fast.png" alt="快捷方式">
                <img class="markPhoto" src="@/assets/photo/markPhoto.png" alt="图库">
                <img class="shiftRight" src="@/assets/photo/shiftRight.png" alt="右移">
            </div>
            <div class="preview"></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
export default {
    name: 'Marked',
    data () {
        return {
            title: '',
            textarea: '',
            markedContent: '',
            textareaHeight: ''
        }
    },
    created () {
        this.textareaLocation()
    },
    mounted () {
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code) {
                return highlight.highlightAuto(code).value
            },
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        })
    },
    computed: {
        location () {
            return {
                height: `${this.textareaHeight}px`
            }
        }
    },
    methods: {
        textareaLocation () {
            var screenheight = document.documentElement.clientHeight
            this.textareaHeight = screenheight - 106
        },
        // 多行文本框值更新时触发
        markdown () {
            this.renderer = {
                heading (text, level) {
                    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
                    return `
                        <h${level}>
                            <a name="${escapedText}" class="anchor" href="#${escapedText}">
                                <span class="header-link">123</span>
                            </a>
                            123
                        </h${level}>`
                }
            }
            this.markedContent = marked(this.textarea)
        }
    }
}
</script>

<style lang="scss" scoped>
.markdown {
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 16.8px;
        height: 63px;
        background: #fff;
        border-bottom: 1px solid #ddd;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        .title {
            flex: 1;
            margin-right: 15px;
        }
        .button-groud {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 63px;
        }
    }
    .area {
        overflow: hidden;
        position: fixed;
        top: 64px;
        right: 0;
        left: 0;
        right: 0;
        bottom: 43px;
        .content-area {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            overflow: auto;
            .edit-area, .marked-area {
                flex-grow: 1;
                width: 50%;
                height: 100%;
                overflow: hidden;
            }
            .edit-area {
                .edit {
                    padding: 24px;
                    overflow: hidden;
                    .textarea {
                        width: 100%;
                        line-height: 1.7;
                        font-size: 14px;
                        background: #f4f5f5;
                        border: none;
                        outline: none;
                        // overflow: hidden;
                    }
                }
            }
            .marked-area {
                background: #fff;
                // height: 100%;
                .marked {
                    margin: 0;
                    padding: 24px;
                    line-height: 1.7;
                    font-size: 14px;
                    color: #000;
                    border-left: 1px solid #ddd;
                    word-break: break-word;
                    overflow-x: hidden;
                }
            }
        }
    }
    .footer {
        display: flex;
        flex-direction: row;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        .editor, .preview {
            display: flex;
            align-items: center;
            width: 50%;
            height: 42px;
            padding: 0 7.2px;
            background: #fff;
            border-top: 1px solid #ddd;
            .fast, .markPhoto {
                width: 19px;
                height: 14px;
            }
        }
        .preview {
            border-left: 1px solid #ddd;
        }
    }
}
</style>
