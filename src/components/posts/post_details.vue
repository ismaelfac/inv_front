<template>
    <div class="blog-details-area">
        <!-- blog-details-image -->
        <div class="blog-details-image">
            <img :src="post.img_post" alt="">
        </div>
        <!-- blog-details-title-time -->
        <div class="blog-details-title-time">
            <h5>Id{{ post.id}}: {{ post.title }}</h5>
            <p>{{ post.created_at}}</p>
        </div>
        <!-- blog-details-desctiption -->
        <div class="blog-details-desctiption mb-60">
            <div class="blog-quote">
                <p style="text-align: justify" v-html="post.description"></p>
            </div>
         </div>
        <!-- blog-details-share-tags -->
        <div class="blog-details-share-tags clearfix mb-75">
            <div class="blog-details-tags f-left">
                <ul>
                    <li>Categorias :</li>
                    <li v-for="category in post.categories" :key="category.id"><a href="#!">{{ category.title }} - </a></li>
                </ul>
            </div>
            <div class="blog-details-share f-right">
                <ul class="social-media">
                    <li>Compartir:</li>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div> 
        <!-- blog-details-author-post -->
        <div class="blog-details-author-post clearfix line-bottom pb-30 mb-55">
            <div class="blog-details-author-image">
                <a href="agent-details.html"><img src="/src/assets/website/images/avatar/1.jpg" alt=""></a>
            </div>
            <div class="blog-details-author-desc">
                <div class="blog-details-author-name">
                    <h6><a href="agent-details.html">{{ post.author }}</a></h6>
                    <p class="">Autor</p>
                </div>
                <p><b>Fuente: </b><a v-bind:href="post.source" target="_blank">{{ post.title_source}}</a></p>
            </div>
        </div>
         <!-- blog-details-reply -->
        <div class="blog-details-reply leave-review mb-50">
            <h5>Que opinas sobre el tema: <b>{{ post.title}}</b>. Danos tu opinión</h5>
            <form action="#">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" name="name" placeholder="Tu nombre">
                    </div>
                    <div class="col-md-6">
                        <input type="email" name="email" placeholder="Correo electronico">
                    </div>
                </div>
                <textarea placeholder="Escribe un comentario"></textarea>
                <button type="button" class="submit-btn-1">ENVIAR COMENTARIO</button>
                <button type="button" class="submit-btn-1">DESEO REGISTRARME</button>
            </form>
        </div>
        <!-- pro-details-feedback -->
        <div class="pro-details-feedback mb-100">
            <!-- media -->
            <div class="media">
                <a class="media-left" href="#">
                    <img src="/src/assets/website/images/avatar/1.jpg" alt="">
                </a>
                <div class="media-body">
                    <h6 class="media-heading"><a href="#">David Backhum</a></h6>
                    <p><span>6 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                    <a href="#">Reply</a>
                </div>
            </div>
            <!-- media -->
            <div class="media">
                <a class="media-left" href="#">
                    <img src="/src/assets/website/images/avatar/2.jpg" alt="">
                </a>
                <div class="media-body">
                    <h6 class="media-heading"><a href="#">Saniya Mirza</a></h6>
                    <p><span>8 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                    <a href="#">Reply</a>
                </div>
            </div>
            <!-- media -->
            <div class="media">
                <a class="media-left" href="#">
                    <img src="/src/assets/website/images/avatar/3.jpg" alt="">
                </a>
                <div class="media-body">
                    <h6 class="media-heading"><a href="#">Lionel Messi</a></h6>
                    <p><span>10 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                    <a href="#">Reply</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '../../store';
import Icon from '../../views/Icon.vue'
export default {
    name:'post_details',
	components:{
        'app-icon': Icon
   	},
    props:['id'],
    computed: {
        post() {
            return store.getters.findPost(this.id)
        }
    }
}
</script>