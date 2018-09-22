

export default {
  add({ commit }, isCommon) {
    commit('add', isCommon);
  },
  update({ commit }, { low, isCommon }) {
    commit('update', { low, isCommon });
  },
  remove({ commit }, { id, isCommon }) {
    commit('remove', { id, isCommon });
  },
};
