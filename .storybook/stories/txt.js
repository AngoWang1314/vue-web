import Vue from 'vue';
import Txt from '@/components/Txt';

Vue.component('txt', Txt);

export default {
  title: 'Txt',
  component: Txt
};

export const withTxt = () => ({
  components: { Txt },
  template: '<txt msg="msg"></txt>'
});
