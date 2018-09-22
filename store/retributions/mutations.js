/* eslint-disable no-param-reassign */

import { uuid } from 'vue-uuid';

export default {
  add(state) {
    if (state.retributedDays.length < 6) {
      const row = { description: '', days: 1, id: uuid.v4() };
      state.retributedDays.push(row);
    }
  },
  remove(state, id) {
    state.retributedDays = state.retributedDays.filter(i => i.id !== id);
  },
  update(state, low) {
    const item = low;
    const items = state.retributedDays;

    const foundIndex = items.findIndex(x => x.id === item.id);

    state.retributedDays[foundIndex] = item;
  },
};
