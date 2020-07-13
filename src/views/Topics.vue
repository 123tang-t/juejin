<template>
    <div class="topics">
        <div class="topics-item">
            <div class="content">
                <div class="title">全部话题</div>
                <div class="topic-list">
                    <div class="list-item" v-for="topic of topicsDetails" :key="topic.id">
                        <img class="title-img" src="../assets/photo/cat.jpg" alt="图标">
                        <div class="desc">
                            <div class="title">{{topic.title}}</div>
                            <div class="number">
                                <span>{{topic.attention}}&nbsp;关注</span>&nbsp;@<span>{{topic.boiling}}&nbsp;沸点</span>
                            </div>
                            <div class="attention">
                                <p>&nbsp;+关注</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topics',
    props: {
        topicsDetails: Array
    }
}
</script>

<style lang="scss" scoped>
.topics {
    // width: 100%;
    height: 100%;
    background: #fff;
    .topics-item {
        display: flex;
        flex-direction: column;
        margin: 60px auto 10px;
        max-width: 960px;
        .content {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
            .title {
                margin: 24px 0;
                padding: 0 14.4px;
                height: 30px;
                color: #0e0e0e;
                font-size: 24px;
                font-weight: 600;
                text-align: left;
            }
            .topic-list {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                flex-wrap: wrap;
                .list-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 18px 14.4px;
                    width: 26%;
                    .title-img {
                        margin-right: 2%;
                        width: 72px;
                        height: 72px;
                        border-radius: 12px;
                        background: #fff;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .desc {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        margin-left: 14.4px;
                        width: 139.41px;
                        // max-width: 144px;
                        color: #8a9aa9;
                        letter-spacing: normal;
                        .title {
                            margin: 0;
                            padding: 0;
                            height: 21px;
                            color: #2e3135;
                            font-weight: 600;
                            font-size: 16.8px;
                            cursor: pointer;
                        }
                        .number {
                            padding-top: 6px;
                            font-size: 13.2px;
                        }
                        .attention {
                            padding-top: 6px;
                            height: 22px;
                            color: #37c701;
                            font-size: 13.2px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>
