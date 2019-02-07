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
                                <li>Propiedades</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BREADCRUMBS AREA END -->
<!-- Start page content -->
<section id="page-content" class="page-wrapper">

    <div class="blog-area pt-115 pb-120">
        <properties></properties>
    </div>
             
    <!-- SUBSCRIBE AREA START -->
        <subscribe></subscribe>
    <!-- SUBSCRIBE AREA END -->                    
</section>
    </div>
</template>
<script>
import subscribe from '../subscribe/subscribe.vue'
import properties from '../properties_client/properties.vue'
export default {
    name:'properties',
    components: {
        subscribe,
        properties
    }
}
</script>