import { shallowMount } from '@vue/test-utils';
import index from './index';

describe('<index msg="msg" />', () => {
  it('should render correct msg', () => {
    const wrapper = shallowMount(index, {
      propsData: {
        msg: 'msg'
      }
    });
    expect(wrapper.find('.txt').text()).toBe('msg');
  });
});
