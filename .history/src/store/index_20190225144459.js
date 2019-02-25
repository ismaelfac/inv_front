import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks.js'
import comments from './comments.js'
import posts from './modules/posts.js'
import categories from './modules/categories.js'
import classifieds from './modules/classifields.js'
import properties from './modules/properties.js'
import client from './modules/clients.js'
import { getLocalUser } from '../helpers/auth.js';

Vue.use(Vuex)

const user = getLocalUser();

export default new Vuex.Store({
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        tasks,
        comments,
        posts, 
        categories,
        classifieds,
        properties,
        client
    },
    getters: {
        isLo
        findTask(state) {
            return function (id){
         		let task = state.tasks.find(task => task.id == id)
                not_found_unless(task);
                return task;    
            }
        },
        findPost(state) {
            return function (id){
         		let post = state.posts.find(post => post.id == id)
                not_found_unless(post);
                return post;    
            }
        },
        findComments(state){
            return function (id){
                let commment = state.comments.find(comment => comment.id == id)
                not_found_unless(comment);
                return comment;
            }
        },
        findClassified(state){
            return function (id){
                let classified = state.classifieds.find(classified => classified.id == id)
                not_found_unless(classified);
                return classified;
            }
        },
        findProperties(state){
            return function (id){
                let property = state.properties.find(property => property.id == id)
                not_found_unless(property);
                return property;
            }
        }
    },
    mutations: {
        createTask(state, newTask){
            state.tasks.push(newTask)
        },
        toggleTask(state, task) {
            task.pending = !task.pending;
        },
        toggleComment(state, comment) {
            comment.pending = !comment.pending;
        },
        updateTask(state, {id, draft}){
            let index = state.tasks.findIndex(task => task.id == id);
            state.tasks.splice(index, 1, draft)
        },
        deleteTask(state, id) {
            let index = state.tasks.findIndex(task => task.id == id);  
            state.tasks.splice(index, 1);
        },
        deleteCompletedTasks(state) {
            state.tasks = state.tasks.filter(task => task.pending);
        },
         deleteCompletedComment(state) {
            state.comments = state.comments.filter(comment => comment.pending);
        }
    },
    actions: {
        createTask(context,{ title, description }) {
            return new Promise((resolve, reject) => {
                let newTask = {
                    id: context.state.tasks.length + 1,
                    title,
                    description,
                    pending: true
                }    
                context.commit('createTask', newTask)
                resolve(newTask)
            })            
        },
        updateTask(context, payload) {
            context.commit('updateTask', payload)
        },
        toggleTask(context, task){
            context.commit('toggleTask', task)
        },
        toggleComment(context, task){
            context.commit('toggleComment', task)
        },
        deleteTask(context, id){
            context.commit('deleteTask', id)
        },
        deleteCompletedTasks(context){
            context.commit('deleteCompletedTasks')
        },
        deleteCompletedComment(context){
            context.commit('deleteCompletedComment')
        }
    }
})



