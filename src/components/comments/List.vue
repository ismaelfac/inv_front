<template>
	<div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="top mt-40">
                <h2>{{ property }}</h2>
                
                <router-link :to="{ name: 'comments.create' }" class="submit-btn-1">Nuevo Comentario</router-link>
            </div>
            <h6>Comentarios del Inmueble</h6>
            <ul class="list-group comments-list">
                <comment-item v-for="(comment) in comments" :key="comment.id" :comment="comment"></comment-item>
            </ul>

            <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>            
        </div>
        <div class="col-xs-12 col-md-6">
            <router-view></router-view>
        </div>
	</div>
</template>

<script>
import store from '../../store'
import commentItem from './ListItem.vue'


export default {
    props:['property'],
    computed: {
        comments: () => store.state.comments
    },
    components: {
        'comment-item': commentItem
    },
    methods: {
        deleteCompleted() {
            store.dispatch('deleteCompletedComment');
        }
    }
}
</script>

<<<<<<< HEAD
<style lang="scss">
    .top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .comments-list {
        margin-bottom: 40px;
    }
</style>

=======
>>>>>>> 2606621664cb76ab783da1dddc55bd575ef271ea



