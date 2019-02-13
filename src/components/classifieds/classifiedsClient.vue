<template>
    <article class="recent-post-item">
        <div class="recent-post-image">
            <a href="#"><img :src="classified.img_classified" alt=""></a>
        </div>
        <div class="recent-post-info">
            <div class="recent-post-title-time">
                <h5><a href="single-blog.html">{{ classified.title }}</a></h5>
                <p>{{ classified.created_at }}</p>
            </div>
            <p v-html="classified.price"></p>
        </div>
    </article>
</template>

<script>
import store from '../../store'
// mapState
import TaskItem from './ListItem.vue'

export default {
	name: 'classified-client',
    props: ['classified'],
    computed: {
        isActive() {
            return this.classified.id == this.$route.params.id;
        }
    },
    methods: {
        select() {
            let route = this.isActive
                ? {name: 'classifieds'}
                : {name: 'classifieds.details', params: {id: this.classified.id}};

            this.$router.push(route);
        },
        toggleStatus() {
            store.dispatch('toggleclassified', this.classified);
        }
    }
}
</script>

<style lang="scss">
    .top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .tasks-list {
        margin-bottom: 40px;
    }
</style>