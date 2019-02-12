<template>
    <div>
        <!-- BREADCRUMBS AREA START -->
        <div class="breadcrumbs-area bread-bg-about_us bg-opacity-black-70">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="breadcrumbs">
                            <h2 class="breadcrumbs-title"></h2>
                            <ul class="breadcrumbs-list">
                                <router-link tag="li" to='/'><a>Inicio</a></router-link>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BREADCRUMBS AREA END -->

        <!-- Start page content -->
        <section id="page-content" class="page-wrapper">
            <!-- FIND HOME AREA START -->
                Componente Busqueda
            <!-- FIND HOME AREA END -->
            <!-- BLOG AREA START -->
            <div class="blog-area pt-115 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                            <div class="row">
                                <div class="col-md-12" v-if="{id}">
                                    <router-view></router-view>
                                </div>                               
                                <div>
                                    <list-item v-for="post in posts" :key="post.id" :post="post" :carousel="false"></list-item>
                                </div>
                            </div>               
                        </div>   
                        <div class="col-md-4 col-xs-12">
                            <!-- widget-search -->
                            <aside class="widget widget-search mb-30">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Search...">
                                    <button type="button" class=""><i class="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                            </aside>
                            <!-- widget-categories -->
                            <aside class="widget widget-categories mb-50">
                                <h5>Categorias</h5>
                                <ul class="widget-categories-list">
                                    <li v-for="category in categories" :key="category.id" :category="category"><a href="#">{{ category.title}} <span>{{ category.post_total}}</span></a></li>
                                  
                                </ul>
                            </aside>
                            <!-- widget-recent-post -->
                            <aside class="widget widget-recent-post mb-50">
                                <h5>Recent Post</h5>
                                <div class="row">
                                    <!-- blog-item -->
                                    <div class="col-md-12 col-sm-6 col-xs-12">
                                        <article class="recent-post-item">
                                            <div class="recent-post-image">
                                                <a href="single-blog.html"><img src="/src/assets/website/images/recent-post/1.jpg" alt=""></a>
                                            </div>
                                            <div class="recent-post-info">
                                                <div class="recent-post-title-time">
                                                    <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt</p>
                                            </div>
                                        </article>
                                    </div>
                                    <!-- blog-item -->
                                    <div class="col-md-12 col-sm-6 col-xs-12">
                                        <article class="recent-post-item">
                                            <div class="recent-post-image">
                                                <a href="single-blog.html"><img src="/src/assets/website/images/recent-post/2.jpg" alt=""></a>
                                            </div>
                                            <div class="recent-post-info">
                                                <div class="recent-post-title-time">
                                                    <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt</p>
                                            </div>
                                        </article>
                                    </div>
                                    <!-- blog-item -->
                                    <div class="col-md-12 col-sm-6 col-xs-12">
                                        <article class="recent-post-item">
                                            <div class="recent-post-image">
                                                <a href="single-blog.html"><img src="/src/assets/website/images/recent-post/3.jpg" alt=""></a>
                                            </div>
                                            <div class="recent-post-info">
                                                <div class="recent-post-title-time">
                                                    <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt</p>
                                            </div>
                                        </article>
                                    </div>
                                    <!-- blog-item -->
                                    <div class="col-md-12 col-sm-6 col-xs-12">
                                        <article class="recent-post-item">
                                            <div class="recent-post-image">
                                                <a href="single-blog.html"><img src="/src/assets/website/images/recent-post/3.jpg" alt=""></a>
                                            </div>
                                            <div class="recent-post-info">
                                                <div class="recent-post-title-time">
                                                    <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </aside>
                            <!-- widget-archive -->
                            <aside class="widget widget-archive mb-50">
                                <h5>Archive</h5>
                                <ul class="widget-archive-list">
                                    <li><a href="#">August <span>2016</span></a></li>
                                    <li><a href="#">June <span>2016</span> </a></li>
                                    <li><a href="#">May <span>2016</span> </a></li>
                                    <li><a href="#">April <span>2016</span> </a></li>
                                    <li><a href="#">March <span>2016</span> </a></li>
                                </ul>   
                            </aside>
                            <!-- widget-twitter -->
                            <aside class="widget widget-twitter mb-60">
                                <h5>Latest Tweets</h5>
                                <div class="single-twette">
                                    <div class="twitter-icon">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div class="tweet-brief">
                                        <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor  <span>Ronchi / 3 hour ago</span></p>
                                    </div>
                                </div>
                                <div class="single-twette">
                                    <div class="twitter-icon">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div class="tweet-brief">
                                        <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor  <span>Ronchi / 3 hour ago</span></p>
                                    </div>
                                </div>
                                <div class="single-twette">
                                    <div class="twitter-icon">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div class="tweet-brief">
                                        <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor  <span>Ronchi / 3 hour ago</span></p>
                                    </div>
                                </div>
                            </aside>
                            <!-- widget-add -->
                            <aside class="widget widget-add mb-0">
                                <div class="widget-add-item">
                                    <div class="widget-add-image">
                                        <a href="#"><img src="/src/assets/website/images/others/add.jpg" alt=""></a>
                                        <div class="widget-add-info">
                                            <h5><a href="#"><span>25% off</span> <br> Build Your <br> Dream with Us</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <!-- BLOG AREA END -->

            <!-- SUBSCRIBE AREA START -->
                <subscribe></subscribe>
            <!-- SUBSCRIBE AREA END --> 
        </section>
        <!-- End page content -->
    </div>
</template>
<script>
import store from '../../store'
import blog from '../../components/blog/List.vue'
import posts from '../../components/posts/ListItem.vue'
import subscribe from '../../components/subscribe/subscribe.vue'
export default {
    name: 'blog',
    components: {
        subscribe,
        blog,
        'list-item': posts
    },
    props:['id'],
    computed: {
        posts: () => store.state.posts,
        categories: () => store.state.categories
    },

}
</script>