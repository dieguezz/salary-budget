import mutations from './retributions/mutations';
import actions from './retributions/actions';
import getters from './retributions/getters';
import state from './retributions/state';

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
