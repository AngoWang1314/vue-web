<template>
  <div class="child">{{ name }}</div>
</template>

<script>
  export default {
    name: 'Child',
    data() {
      return {
        name: 'Child',
      };
    },
  };
</script>

<style lang="less" scoped>
  .child {
    color: red;
  }
</style>
