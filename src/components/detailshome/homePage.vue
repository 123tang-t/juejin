<template>
  <div class="home-page">
        <!-- <div class="nav">123</div> -->
        <div class="details-page">
            <div class="details-desc">
                <Recommend v-show="detailsPage==='recommend'"/>
                <RealEnd v-show="detailsPage==='realEnd'"/>
                <FrontEnd v-show="detailsPage==='frontEnd'"/>
            </div>
            <div class="contents">123</div>
        </div>
  </div>
</template>

<script>
import Recommend from '@/components/detailshome/recommend.vue'
import RealEnd from '@/components/detailshome/realEnd.vue'
import FrontEnd from '@/components/detailshome/frontEnd.vue'

export default {
    name: 'HeaderTitle',
    props: {
        detailsPage: String
    },
    components: {
        Recommend,
        RealEnd,
        FrontEnd
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
.home-page {
    // display: flex;
    // flex-direction: column;
    max-width: 960px;
    margin: 15px auto;
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
            background: #fff;
        }
    }
}
</style>
