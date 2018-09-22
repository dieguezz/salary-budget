/* eslint-disable  */

import { uuid } from 'vue-uuid';

export default {
  add(state, isCommon) {
    // `state` is the local module state
    const row = { description: '', days: 1, id: uuid.v4() };
    if (isCommon) {
      if (state.lows.common.length < 6) {
        state.lows.common.push(row);
      }
    } else {
      if (state.lows.laboral.length < 6) { 
        state.lows.laboral.push(row);
      }
    }
  },
  remove(state, { isCommon, id }) {
    // `state` is the local module state
    if (isCommon) {
      state.lows.common = state.lows.common.filter(i => i.id !== id);
    } else {
      state.lows.laboral = state.lows.laboral.filter(i => i.id !== id);
    }
  },
  update(state, { low, isCommon }) {
    const item = low;
    const items = isCommon ? state.lows.common : state.lows.laboral;

    const foundIndex = items.findIndex(x => x.id == item.id);

    // `state` is the local module state
    if (isCommon) {
      state.lows.common[foundIndex] = item;
    } else {
      state.lows.laboral[foundIndex] = item;
    }
  },
};
