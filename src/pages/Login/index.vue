<template>
  <div class="login">
    <div v-for="(item, index) in state.list" :key="index">
      {{ item.title }}
    </div>
    <Button type="primary" @click="doLogin">
      doLogin
    </Button>
  </div>
</template>

<script>
  import { Button } from 'ant-design-vue';
  import { observer } from 'mobx-vue';
  import Item from '@/stores/Item';

  export default observer({
    name: 'Login',
    components: {
      Button
    },
    data() {
      return {
        state: Item,
      };
    },
    created() {
      Item.actionGetList();
    },
    methods: {
      doLogin() {
        const vm = this;

        localStorage.setItem('token', 'token');
        vm.$router.replace(decodeURIComponent(vm.$route.query.redirect));
      }
    }
  });
</script>

<style lang="less" scoped>
  .login {
    color: red;
  }
</style>
