<template>
  <div id="app">
    <div>{{ count }}/{{ doubleCount }}</div>
    <button @click="increment()">+</button>
    <button @click="getIndex">+</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  export default {
    name: 'App',
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'doubleCount'
      ])
    },
    methods: {
      increment () {
        this.$store.commit({
          type: 'increment',
          amount: 5
        });
      },
      ...mapActions([
        'getIndex'
      ])
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
