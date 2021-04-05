<template>
  <div class="subapp" id="subapp"></div>
</template>

<script>
  import importHTML from 'import-html-entry';

  export default {
    name: 'SubAPP',
    data() {
      return {
        name: 'SubAPP',
      };
    },
    mounted() {
      // 挂载前卸载其它应用
      let e = new CustomEvent('unmount', {
        detail: {
          indexes: {
          },
          userInfo: {
          }
        }
      });
      window.dispatchEvent(e);

      importHTML('/index/index.html')
      .then(res => {
        document.querySelector('#subapp').innerHTML = res.template;

        res.execScripts().then(exports => {
          console.log('exports', exports);

          // 通过window.global共享父子应用依赖的数据
        });
      });
    },
  };
</script>

<style lang="less" scoped>
  .subapp {
    color: red;
  }
</style>
