export default {
  retributedDays(state) {
    return state.retributedDays;
  },
  totalRetributedDays(state) {
    switch (state.retributedDays.length) {
      case 1:
        return state.retributedDays[0].days;
      case 0:
        return 0;
      default:
        return state.retributedDays.reduce((sum, curr) =>
          sum + parseInt(curr.days, 10), 0);
    }
  },
};
