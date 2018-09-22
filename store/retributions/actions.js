

export default {
  add({ commit }, isCommon) {
    commit('add', isCommon);
  },
  update({ commit }, low) {
    commit('update', low);
  },
  remove({ commit }, id) {
    commit('remove', id);
  },
};
