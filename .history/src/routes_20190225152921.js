import ErrorNotFound from './components/errors/NotFound.vue'

//login
import Login from './components/auth/Login.vue'

import Content from './views/Content.vue'
import About from './views/website/about.vue'
import Brands from './views/website/brands.vue'
import Contact from './views/website/contact.vue'
import Blog from './views/website/blog.vue'
//
import TaskList from './components/Task/List.vue'
import TaskEdit from './components/Task/Edit.vue'
import TaskCreate from './components/Task/Create.vue'
import TaskDetails from './components/Task/Details.vue'

import Posts from './views/website/blog.vue'
import PostDetails from './components/posts/post_details.vue'

import ClassifiedList from './components/classifieds/List.vue'
import ClassifiedCreate from './components/classifieds/Create.vue'
import ClassifiedDetails from './components/classifieds/Details.vue'
import ClassifiedEdit from './components/classifieds/Edit.vue'

import Properties from './views/website/properties.vue'
import PropertiesDetails from './components/properties_client/Details.vue'

import CommentList from './components/comments/List.vue'
import CommentEdit from './components/comments/Edit.vue'
import CommentCreate from './components/comments/Create.vue'
import CommentDetails from './components/comments/Details.vue'

//panel
import Recommended from './components/panelClient/recommended.vue'

const router = routes = [
		{
			path: '/',
			name: 'content',
            component: Content
		},
		{
			path: '/login',
			component: Login
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
            component: Blog
		},
        {
			path: '/contact',
			name: 'contact',
            component: Contact
		},
		// Panel client
		{
			path: '/recommended',
			name: 'recomendadas',
			component: Recommended,
			meta: {
				requiresAuth: true
			}
		},
        // properties
        {
			path: '/properties',
			component: Properties,
			children: [
				{
					path: '',
					name: 'properties',
					component: Properties
				},
				
				{
					path: ':id',
					name: 'properties.details',
					component: PropertiesDetails,
					props: true
				},
			]
		},
		// tasks
        {
			path: '/tasks',
			component: TaskList,
			children: [
				{
					path: '',
					name: 'tasks',
					component: {
						template: '<h2>Por favor selecciona una tarea</h2>'
					}
				},
				{
					path: 'create',
					name: 'tasks.create',
					component: TaskCreate
				},
				{
					path: ':id',
					name: 'tasks.details',
					component: TaskDetails,
					props: true
				},
				{
					path: ':id/edit',
					name: 'tasks.edit',
					component: TaskEdit,
					props: true
				}
			]
		},
		//comments
		{
			path: '/comments',
			component: CommentList,
			children: [
				{
					path: '',
					name: 'comments',
					component: {
						template: '<h2>Por favor selecciona un comentario</h2>'
					}
				},
				{
					path: 'create',
					name: 'comments.create',
					component: CommentCreate
				},
				{
					path: ':id',
					name: 'comments.details',
					component: CommentDetails,
					props: true
				},
				{
					path: ':id/edit',
					name: 'comments.edit',
					component: CommentEdit,
					props: true
				}
			]
		},
		// posts
		{
			path: '/posts',
			component: Posts,
			children: [
				{
					path: '',
					name: 'posts',
					component: Posts
				},
				
				{
					path: ':id',
					name: 'posts.details',
					component: PostDetails,
					props: true
				},
			]
		},
		// Classifieds
		{
			path: '/classifieds',
			component: ClassifiedList,
			children: [
				{
					path: '',
					name: 'classifieds',
					component: {
						template: '<h2>Por favor selecciona una tarea</h2>'
					}
				},
				{
					path: 'create',
					name: 'classifieds.create',
					component: ClassifiedCreate
				},
				{
					path: ':id',
					name: 'classifieds.details',
					component: ClassifiedDetails,
					props: true
				},
				{
					path: ':id/edit',
					name: 'classifieds.edit',
					component: ClassifiedEdit,
					props: true
				}
			]
		},
		{
			path: '/404',
			component: ErrorNotFound
		},
		{
			path: '*',
			redirect: '/404'
		}
	];



