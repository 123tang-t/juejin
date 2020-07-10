<template>
    <div class="events-page">
        <div class="panel">
            <div class="carousel">
                <el-carousel trigger="click" arrow="never" height="280px">
                    <el-carousel-item v-for="events of eventsDetails" :key="events.id">
                        <img src="https://user-gold-cdn.xitu.io/159229602175354c36631f184246bac76523afa47c229.jpg?imageView2/1/w/460/h/270/q/85/format/webp/interlace/1" :alt="events.id">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="calendar"></div>
        </div>
        <div class="events-list">
            <div class="events" v-for="events of eventsDetails" :key="events.id">
                <img class="events-img" src="../assets/photo/cover.jpg" alt="events.id">
                <div class="message">
                    <div class="title">{{events.title}}</div>
                    <div class="activity-time">
                        <i class="el-icon-date"></i>
                        <span class="data">{{events.startTime}}</span>
                    </div>
                    <div class="join-bottom">
                        <div class="adress"><i class="el-icon-delete-location icon"></i>{{events.city}}</div>
                        <div class="join"><span>报名参加</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventsPage',
    props: {
        eventsDetails: Array
    }
}
</script>

<style lang="scss" scoped>
.events-page {
    max-width: 960px;
    margin: 120px auto 50px;
    .panel {
        display: flex;
        flex-direction: row;
        height: 280px;
        .carousel {
            width: 470px;
        }
    }
    .events-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 35px -7px 0;
        .events {
            margin: 0 7px 30px 7px;
            // padding: 0 7px;
            width: 229.5px;
            background: #fff;
            .events-img {
                width: 229.5px;
                height: 134.98px;
            }
            .message {
                padding: 20px 12px 15px;
                .title {
                    height: 40px;
                    color: #333333;
                    font-size: 14px;
                    font-weight: 700;
                }
                .activity-time {
                    display: flex;
                    align-items: center;
                    margin: 6px 0 0;
                    height: 16.77px;
                    .data {
                        margin: 0 0 0 5px;
                        color: #333333;
                        font-size: 12px;
                    }
                }
                .join-bottom {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 6px 0 0;
                    height: 25px;
                    .adress {
                        display: flex;
                        align-items: center;
                        color: #333333;
                        font-size: 12px;
                        .icon {
                            margin: 0 5px 0 0;
                        }
                    }
                    .join {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100px;
                        height: 25px;
                        color: #fff;
                        font-size: 12px;
                        background: #4d91fd;
                        border-radius: 30px;
                    }
                }
            }
        }
    }
}
</style>
