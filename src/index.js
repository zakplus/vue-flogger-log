/* eslint-disable no-param-reassign */
const VueFlogger = {
  install(Vue, flogger) {
    Vue.flogger = flogger;
    Vue.prototype.$flogger = flogger;
  },
};

export default VueFlogger;
