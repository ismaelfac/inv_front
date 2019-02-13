<template>
    <li @click="select" class="list-group-item comment-list-item"
        :class="{active: isActive, completed: !comment.pending}">
        <a @click.stop="toggleStatus">
            <app-icon :img="comment.pending ? 'unchecked' : 'check'"></app-icon>
        </a>

        <span class="description">{{ comment.title }}</span>
    </li>
</template>

<script>
import store from '../../store';
import Icon from '../../views/Icon.vue'

export default {
    components: {
        'app-icon': Icon
    },
    data() {
        return {
            draft: ''
        };
    },
    props: ['comment'],
    computed: {
        isActive() {
            return this.comment.id == this.$route.params.id;
        }
    },
    methods: {
        select() {
            let route = this.isActive
                ? {name: 'comments'}
                : {name: 'comments.details', params: {id: this.comment.id}};

            this.$router.push(route);
        },
        toggleStatus() {
            store.dispatch('toggleComment',this.comment);
        }
    }
}
</script>

<<<<<<< HEAD
<style lang="scss">
    .list-group-item.comment-list-item {
        display: flex;
        justify-content: space-between;

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

=======
>>>>>>> 2606621664cb76ab783da1dddc55bd575ef271ea







