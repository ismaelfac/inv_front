<template>
    <div class="blog-details-area">
        <!-- blog-details-image -->
        <div class="blog-details-image">
            <img src="/src/assets/website/images/blog/blog-details.jpg" alt="">
        </div>
        <!-- blog-details-title-time -->
        <div class="blog-details-title-time">
            <h5>Id{{ post.id}}: {{ post.title }}</h5>
            <p>{{ post.created_at}}</p>
        </div>
        <!-- blog-details-desctiption -->
        <div class="blog-details-desctiption mb-60">
            <p>{{ post.description }}</p>
            <p>Sheltek is the Best  should be the consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etlore magna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacm</p>
            <div class="blog-quote">
                <p>Real Estate should be the consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco. </p>
            </div>
            <p>There are some design tends  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc     dunt ut labore et dolore magna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>
        <!-- blog-details-share-tags -->
        <div class="blog-details-share-tags clearfix mb-75">
            <div class="blog-details-tags f-left">
                <ul>
                    <li>Tags :</li>
                    <li><a href="#">Apartment,</a></li>
                    <li><a href="#">Building,</a></li>
                    <li><a href="#">Real Estate,</a></li>
                    <li><a href="#">Commercial</a></li>
                </ul>
            </div>
            <div class="blog-details-share f-right">
                <ul class="social-media">
                    <li>Share:</li>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div> 
        <!-- blog-details-author-post -->
        <div class="blog-details-author-post clearfix line-bottom pb-30 mb-115">
            <div class="blog-details-author-image">
                <a href="agent-details.html"><img src="/src/assets/website/images/avatar/1.jpg" alt=""></a>
            </div>
            <div class="blog-details-author-desc">
                <div class="blog-details-author-name">
                    <h6><a href="agent-details.html">Momen Bhuyan</a></h6>
                    <p class="">Author</p>
                </div>
                <p>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
        </div>
        <!-- pro-details-feedback -->
        <div class="pro-details-feedback mb-100">
            <h5>Comments</h5>
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
        <!-- blog-details-reply -->
        <div class="blog-details-reply leave-review">
            <h5>Leave a Coment</h5>
            <form action="#">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" name="name" placeholder="Your name">
                    </div>
                    <div class="col-md-6">
                        <input type="email" name="email" placeholder="Email">
                    </div>
                </div>
                <textarea placeholder="Write here"></textarea>
                <button type="button" class="submit-btn-1">SUBMIT COMMENT</button>
            </form>
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
    },
}
</script>