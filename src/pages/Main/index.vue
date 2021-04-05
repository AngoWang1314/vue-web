<template>
  <div class="main">{{ name }}</div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        name: 'Main',
      };
    },
  };
</script>

<style lang="less" scoped>
  .main {
    color: red;
  }
</style>
