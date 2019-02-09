<template>
    <li @click="select" class="list-group-item task-list-item"
        :class="{active: isActive, completed: !task.pending}">
        <div class="media">
            <a @click.stop="toggleStatus" class="media-left">
                <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
                 <img src="/src/assets/website/images/avatar/1.jpg" alt="">
            </a>
           
            <div class="media-body">
                <h6 class="media-heading"><span class="description">{{ task.title }}</span></h6>
                <p><span>6 hour ago</span>{{ task.description }}</p>
            </div>
        </div>
    </li>
</template>

<script>
import store from '../../store'
import Icon from '../Icon.vue'
export default {
    components:{
        'app-icon': Icon
    },
    data() {
        return {
            draft: ''
        };
    },
    props: ['task'],
    computed: {
        isActive() {
            return this.task.id == this.$route.params.id;
        }
    },
    methods: {
        select() {
            let route = this.isActive
                ? {name: 'tasks'}
                : {name: 'tasks.details', params: {id: this.task.id}};

            this.$router.push(route);
        },
        toggleStatus() {
            store.dispatch('toggleTask', this.task);
        }
    }
}
</script>

<style lang="scss">
    .list-group-item.task-list-item {
   

        a {
            text-decoration: none;
        }

        .description {
            flex: 1;
            padding: 0 5px;
        }

        &.completed {
            &, a {
                color: #999;
            }

            .description {
                text-decoration: line-through;    
            }
        }

        &.active a, &.active {
            color: white;
        }
    }
</style>








