import tasks from './store/tasks.js'
import comments from './store/comments.js'
import posts from './store/modules/posts.js'
import categories from './store/modules/categories.js'
import classifieds from './store/modules/classifields.js'
import properties from './store/modules/properties.js'
import clients from './store/modules/clients.js'
import { getLocalUser } from './helpers/auth.js';

const user = getLocalUser();

export default {
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
        clients
    },
    getters: {
        isLoading(state){
            return state.loading;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        auth_error(state){
            return state.auth_error;
        },
        currentUser(state){
            return state.currentUser;
        },
        findTask(state) {
            return function (id){
         		let task = state.tasks.find(task => task.id == id)
                not_found_unless(task);
                return task;    
            }
        },
        findClient: (state) => (id) => {
                console.log("Id: "+id+". ")
         		let client = state.clients.find(client => client.id === id)
                not_found_unless(client);
                return client;    
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
        login(state){
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload){
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload){
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state){
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
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
        login(context){
            console.log("entro al actions")
            context.commit('login');
        },
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
}



