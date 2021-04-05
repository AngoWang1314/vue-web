<template>
  <div class="other">{{ name }}</div>
</template>

<script>
  export default {
    name: 'Other',
    data() {
      return {
        name: 'Other',
      };
    },
  };
</script>

<style lang="less" scoped>
  .other {
    color: red;
  }
</style>
