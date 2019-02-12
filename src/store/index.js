import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks.js'
import comments from './comments.js'
import posts from './modules/posts.js'
import categories from './modules/categories.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks,
        comments,
        posts, 
        categories
    },
    getters: {
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
        }
    },
    mutations: {
        createTask(state, newTask){
            state.tasks.push(newTask)
        },
        toggleTask(state, task) {
            task.pending = !task.pending;
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
        deleteTask(context, id){
            context.commit('deleteTask', id)
        },
        deleteCompletedTasks(context){
            context.commit('deleteCompletedTasks')
        }
    }
})



