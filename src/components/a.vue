<template>
    <div class="a">
        page A
        {{$store.state.money.money}}
        <button @click="add">增加</button>
        <button @click="reduce">增加</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'A',
  data () {
    return {
    }
  },
  methods: mapActions('money', ['add', 'reduce'])
}
</script>

<style lang="scss" scoped>

</style>
