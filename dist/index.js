"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var VueFlogger = {
  install: function install(Vue, flogger) {
    Vue.flogger = flogger;
    Vue.prototype.$flogger = flogger;
  }
};
var _default = VueFlogger;
exports["default"] = _default;