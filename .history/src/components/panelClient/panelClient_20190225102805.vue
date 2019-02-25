<template>
    <!-- Start page content -->
    <section id="page-content" class="page-wrapper">            
        <!-- FEATURED FLAT AREA START -->
            <div class="featured-flat-area pt-115 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="blog-details-title-time">
                                <h5>Notificaciones <div class="pull-right pr-50"><button class="btn btn-danger" id="show-modal" @click="showModal = true">Reportar Anomalia</button></div></h5>
                                <p><div class="alert" :class="client.alert_client" role="alert"><a href="#">{{ client.message }}</a></div></p>
                            </div>
                        </div>
                    </div>
                    <div class="featured-flat">
                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.recommended }}</p>
                                    <a href="" @click.prevent="get_recommended"><h4 style="text-align:center">Recomendadas</h4></a>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.my_ads }}</p>
                                    <a href="" @click.prevent="get_ads"><h4 style="text-align:center">Mis Anuncios</h4></a>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.my_messages.no_read }}</p>
                                    <a href="" @click.prevent="get_myMessages"><h4 style="text-align:center">Mis Mensajes</h4></a>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.my_properties }}</p>
                                    <a href="" @click.prevent="get_myProperties"><h4 style="text-align:center">Mis Propiedades</h4></a>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <router-link tag="a" :to="{ name: 'tasks.create' }" class="btn btn-primary">Vincular un Inmueble</router-link>
                                <a href="" class="btn btn-primary" @click.prevent="get_classifieds">Crear mi Clasificado</a>
                            </div>
                        </div>
                    </div>
                    <div class="properties-details-area pb-60">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 pt-50">   
                                    <template v-if="recommended">
                                        <div>
                                            <recommended></recommended>
                                        </div>
                                    </template>
                                    <template v-else-if="my_ads">
                                        <div>
                                            <my-ads></my-ads>
                                        </div>
                                    </template>
                                    <template v-else-if="my_messages">
                                        <div>
                                            <h2>Mis mensajes</h2>
                                        </div>
                                    </template>
                                    <template v-else-if="my_properties">
                                        <div>
                                            <h2>Mis propiedades</h2>
                                        </div>
                                    </template>
                                    <template v-else-if="featured_properties">
                                        <div>
                                            <h2>Propiedades Destacadas</h2>
                                        </div>
                                    </template>
                                    <template v-else-if="classifieldsClient">
                                        <div>
                                            <classifields></classifields>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">Reporte de Anomalia</h3>
                <div slot="body"><report></report></div>
            </modal>
        <!-- FEATURED FLAT AREA END -->
    </section>
    <!-- End page content -->
</template>
<script>
import store from '../../store'
import Modal from '../modal/modalComponent.vue'
import Recommended from './recommended.vue'
import Ads from "./ads.vue"
import report from '../anomalies/report.vue'
import classifields from '../classifieds/List.vue'
    export default {
        name: 'panelClient',
        components: {
            'modal': Modal,
            report,
            classifields,
            'recommended': Recommended,
            'my-ads': Ads
        },
        computed: {
            client: () => store.state.client
        },
        data () {
            return {
                showModal: false,
                recommended: false,
                my_ads: false,
                my_messages: false,
                my_properties: false,
                featured_properties: true,
                classifieldsClient: false
            }
        },
        methods:{
            get_recommended() {
                this.changeActivityOptions();
                this.recommended = true;
            },
            get_ads() {
                this.showModal = true;
                this.changeActivityOptions();
                this.my_ads = true;
            },
            get_myMessages() {
                this.changeActivityOptions();
                this.my_messages = true;
            },
            get_myProperties() {
                this.changeActivityOptions();
                this.my_properties = true;
            },
            get_classifieds() {
                this.changeActivityOptions();
                this.classifieldsClient = true;
            },
            changeActivityOptions() {
                this.recommended = false;
                this.my_ads = false;
                this.my_messages = false;
                this.my_properties = false;
                this.featured_properties = false;
                this.classifieldsClient = false;
            }
        }
    }
</script>
<style lang="scss">
    .alert_notifications{
        background-color: #95c41f;
        color: write;
    }
    .query_text{
        text-align: center;
        font-size: 34px
    }
</style>