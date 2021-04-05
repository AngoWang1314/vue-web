<template>
  <div>
    <div class="txt">{{ msg }}</div>
    <Button type="primary">Button</Button>
  </div>
</template>

<script>
  import { Button } from 'ant-design-vue';

  export default {
    name: 'Txt',
    props: {
      msg: String,
    },
    components: {
      Button
    }
  };
</script>

<style lang="less" scoped>
  .txt {
    color: red;
  }
</style>
