<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title-2 text-center">
                    <h2> BLOG</h2>
                    <p>Que comentan los expertos. Enterese de las opiniones de los expertos en materia inmobiliaria</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="blog-carousel">
                <!-- blog-item -->
                <list-item v-for="post in posts" :key="post.id" :post="post"></list-item>                
            </div>
        </div>
    </div>
</template>
<script>
import store from '../../store'
import listItem from './ListItem.vue'
export default {
    name:'Posts',
    components:{
        'list-item':listItem
    },
    computed: {
        posts: () => store.state.posts
    },
}
</script>