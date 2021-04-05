import axios from 'axios';

const actions = {
    async increment ({ commit }) {
        let ret = await axios('https://www.xuebabiji.club/api/common/getIndex');
        
        commit({
            type: 'increment',
            amount: ret.data.data.indexes.area.length
        });
    },
    async getIndex ({ dispatch, commit }) {
        await dispatch('increment');

        let ret = await axios('https://www.xuebabiji.club/api/common/getIndex');

        commit({
            type: 'increment',
            amount: ret.data.data.indexes.creditLine.length
        });
    }
};

export default actions;
