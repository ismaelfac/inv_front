import '@babel/polyfill'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import router from './router'
import App from './components/App.vue'

Vue.use(VeeValidate, {
	validity: true
});
window.not_found = function () {
	console.log('Not found:' + router.currentRoute.fullPath);

	router.replace('/404');
};

window.not_found_unless = function (condition) {
	if (! condition) {
		not_found();
	}
}
window.clone = function (obj) {
	return JSON.parse(JSON.stringify(obj));
}
Vue.component('app-icon', require('./components/Icon.vue'));
Vue.component('subscribe', require('./components/subscribe/subscribe.vue'));

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
