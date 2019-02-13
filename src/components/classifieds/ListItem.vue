<template>
    <li @click="select" class="list-group-item classified-list-item"
        :class="{active: isActive, completed: !classified.pending}">
        <div class="media">
            <a @click.stop="toggleStatus" class="media-left">
                <app-icon :img="classified.pending ? 'unchecked' : 'check'"></app-icon>
                 <img class="img_comment" :src="classified.user_img" alt="">
            </a>
           
            <div class="media-body">
                <h6 class="media-heading"><span class="description">{{ classified.title }}</span></h6>
                <p><span>6 hour ago</span><span class="description">{{ classified.description }}</span></p>
            </div>
        </div>
    </li>
</template>

<script>
import store from '../../store'
import Icon from '../../views/Icon.vue'
export default {
    components:{
        'app-icon': Icon
    },
    data() {
        return {
            draft: ''
        }
    },
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
    .list-group-item.classified-list-item { 

        a {
            text-decoration: none;
        }

        .img_comment {
            width: 81px;
            height: 72px;   
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








