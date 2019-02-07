import Vue from 'vue'
import Router from 'vue-router'

import ErrorNotFound from '../components/errors/NotFound.vue'

import Content from '../components/Content.vue'
import About from '../components/website/about.vue'
import Brands from '../components/website/brands.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'content',
			component: Content
        },
        {
			path: '/about',
			name: 'about',
			component: About
        },
        {
			path: '/brands',
			name: 'brands',
            component: Brands,
            props: true
		},
		{
			path: '/404',
			component: ErrorNotFound
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
});

export default router



