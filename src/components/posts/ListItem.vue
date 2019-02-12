<template>
    <div >
        <template v-if="carousel">
            <div class="col-md-12">
                <div class="blog-image">
                    <a href="#"><img :src="post.img_post" alt=""></a>
                </div>
                <div class="blog-info">
                    <div class="post-title-time">
                        <h5><a @click="select">{{ post.title}}</a></h5>
                        <p>{{ post.created_at }}</p>
                    </div>
                    <p style="text-align:justify"><b>{{ post.title}}</b> {{ post.description }} </p>
                    <a class="read-more" @click="select">Leer Mas...</a>
                </div>  
            </div>
        </template>
        <template v-else>
            <div class="col-sm-6 col-xs-12">
                <article class="blog-item bg-gray">
                    <div class="blog-image">
                        <a href="#"><img :src="post.img_post" alt=""></a>
                    </div>
                    <div class="blog-info">
                        <div class="post-title-time">
                            <h5><a href="#">{{ post.title}}</a></h5>
                            <p>{{ post.created_at }}</p>
                        </div>
                        <p style="text-align:justify"><b>{{ post.title}}</b> {{ post.description }} </p>
                        <a class="read-more" href="#!" @click="select">Leer Mas...</a>
                    </div>
                </article>
            </div>
        </template>
    </div>
</template>
<script>
import store from '../../store'
export default {
    name:'Post-Item',
    props:['post', 'carousel'],
    filters: {
       uppercase: function (str) {
            return str.toUpperCase()
        },
        lowercase: function (str) {
            return str.toLowerCase()
        },
        capitalize: function (str) {
            str = str.toLowerCase()
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        capitalizeAll: function (str) {
            return str.replace(/\w\S*/g, function(str) { 
                return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
            })
        },
        replaceHello: function (str) {
            return str.replace('soy un', 'Hello')
        },
        replaceWorld: function (str) {
            return str.replace('mensaje de prueba', 'World!')
        }
    },
    computed: {
       
    },
    methods: {
        select() {
            let route = { name: 'posts.details', params: {id: this.post.id}};
            console.log(route);
            this.$router.push(route);
        }
    },
}
</script>