import { observable, action, runInAction } from 'mobx';
import { getList } from '@/apis/Item';

class Item {
  @observable
  list = [];

  @action
  actionGetList = async(params, onSuccess, onError) => {
    try {
      const ret = await getList(params);

      runInAction(() => {
        this.list = ret.data;
      });

      onSuccess && onSuccess(ret.data);
    } catch (error) {
      onError && onError(error);
    }
  }
}

export default new Item();
