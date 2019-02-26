import '@babel/polyfill'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import {routes} from './routes';
import StoreData from './store';
import App from './views/App.vue';
import {initialize}  from './helpers/general';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VeeValidate, {
	validity: true
});

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
	routes,
	mode: 'history'
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

initialize(store, router);

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
