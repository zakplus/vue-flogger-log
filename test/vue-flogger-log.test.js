import test from 'tape';
import Flogger from 'flogger-log';
import Vue from './VueMock';

// eslint-disable-next-line import/no-unresolved,import/extensions
import VueFlogger from '../dist/index';

test('Installation tests', (t) => {
  const flogger = new Flogger();
  Vue.use(VueFlogger, flogger);
  const vue = new Vue();

  t.equal(Vue.flogger, flogger, 'Vue.flogger should be the same FloggerLog instance passed to Vue.use');
  t.equal(vue.$flogger, flogger, 'vue.$flogger should be the same FloggerLog instance passed to Vue.use');

  t.end();
});
