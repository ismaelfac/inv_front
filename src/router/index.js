import Vue from 'vue'
import Router from 'vue-router'

import ErrorNotFound from '../components/errors/NotFound.vue'

import Content from '../components/Content.vue'
import About from '../components/website/about.vue'
import Brands from '../components/website/brands.vue'
import Contact from '../components/website/contact.vue'
import Properties from '../components/website/properties.vue'
import Blog from '../components/website/blog.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'content',
            component: Content,
            props: true
        },
        {
			path: '/about',
			name: 'about',
            component: About,
            props: true
        },
        {
			path: '/brands',
			name: 'brands',
            component: Brands,
            props: true
        },
        {
			path: '/blog',
			name: 'blog',
            component: Blog,
            props: true
		},
        {
			path: '/contact',
			name: 'contact',
            component: Contact,
            props: true
        },
        {
			path: '/properties',
			name: 'properties',
            component: Properties,
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



