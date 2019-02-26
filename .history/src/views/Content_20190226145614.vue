<template>
    <div>
        <div v-if="!currentUser">
        <!-- SLIDER SECTION START -->
    <div class="slider-1 pos-relative slider-overlay">
        <div class="bend niceties preview-1">
            <div id="ensign-nivoslider-3" class="slides">   
                <div class="col-sm-4 col-xs-12"><img src="/src/assets/website/images/brand/slider.png" alt="" title="#slider-direction-1"  /></div>
                <div class="col-sm-4 col-xs-12"><img src="/src/assets/website/images/slider/s2.jpg" alt="" title="#slider-direction-2"  /></div>
            </div>
            <!-- direction 1 -->
            <div id="slider-direction-1" class="slider-direction">
                <div class="slider-content text-center">
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                        <h4 class="slider-1-title-1">Bienvenido <span>Inversiones & Proyectos</span></h4>
                    </div>
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                        <h1 class="slider-1-title-2">TE ASESORAMOS EN LA BUSQUEDA DE SU LOCAL</h1>
                    </div>
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                        <p class="slider-1-desc">Le asesoramos en la busqueda de la ubicación ideal para su marca <br> realizamos estudios de mercado y ranking de zonas </p>
                    </div>
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
                        <a class="slider-button mt-40" href="#">SOY UNA MARCA</a>
                    </div>
                </div>
            </div>
            <!-- direction 2 -->
            <div id="slider-direction-2" class="slider-direction">
                <div class="slider-content text-left">
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4 class="slider-1-title-1">Bienvenido <span>Inversiones & Proyectos</span></h4>
                    </div>
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                        <h1 class="slider-1-title-2">LE AYUDAMOS CON SU INMUEBLES</h1>
                    </div>
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                        <p class="slider-1-desc">Si esta buscando un inmueble para venta y/o arriendo <br> o quiere promocionar uno. </p>
                    </div>
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
                        <a class="slider-button mt-40" href="#">BUSCO INMUEBLES</a>
                        <a class="slider-button mt-40" href="#">PROMOCIONAR MI INMUEBLE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- SLIDER SECTION END -->
    
    <!-- Start page content -->
    <section id="page-content" class="page-wrapper">
            
                <!-- FEATURED FLAT AREA START -->
                <div class="featured-flat-area pt-115 pb-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title-2 text-center">
                                    <h2>Propiedades Destacadas</h2>
                                 </div>
                            </div>
                        </div>
                        <div class="featured-flat">
                            <div class="row">
                                <!-- flat-item -->
                                <properties-app></properties-app>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- FEATURED FLAT AREA END -->

                <!-- BLOG AREA START -->
                <div class="blog-area pb-60">
                    <posts></posts>
                </div>
                <!-- BLOG AREA END -->

                <!-- BRAND AREA START -->
                brands
                <!-- BRAND AREA END -->
                
                <!-- SUBSCRIBE AREA START -->
                 SUBSCRIBE
                <!-- SUBSCRIBE AREA END -->
    </section>
    <!-- End page content -->
    </div>
        <div v-else>
            <panel-client></panel-client>
        </div>
    </div>
</template>
<script>
import Posts from '../components/posts/posts_client.vue'
import Propiedades from '../components/properties_client/properties.vue'
import PanelClient from '../components/PanelClient/PanelClient.vue'
export default {
    name:'Content',
    components: {
        'posts': Posts,
        'properties-app': Propiedades,
        'panel-client': PanelClient
    },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser
        }
    }
}
</script>