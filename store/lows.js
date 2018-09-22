import mutations from './lows/mutations';
import actions from './lows/actions';
import getters from './lows/getters';
import state from './lows/state';

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
