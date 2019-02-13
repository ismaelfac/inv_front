<template>
    <!-- Start page content -->
    <section id="page-content" class="page-wrapper">
            
        <!-- FEATURED FLAT AREA START -->
            <div class="featured-flat-area pt-115 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="blog-details-title-time">
                                <h5>Notificaciones <div class="pull-right pr-50"><a href="" class="btn btn-danger">Reportar Anomalia</a></div></h5>
                                <p><div class="alert" :class="client.alert_client" role="alert"><a href="#">{{ client.message }}</a></div></p>
                            </div>
                        </div>
                    </div>
                    <div class="featured-flat">
                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.compatible_requirements }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Requerimientos compatibles</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.compatible_properties }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Propiedades compatibles</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.requirements }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Mis Requerimientos</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.related_properties }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Mis Propiedades</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                    <!-- ABOUT SHELTEK AREA START -->
                    <div class="about-sheltek-area ptb-115">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-sm-push-6 col-xs-12">
                                    <div class="section-title mb-30">
                                        <h3>MIS PUBLICACIONES </h3>
                                    </div>
                                    COMPONENTE
                                </div>
                                <div class="col-sm-6 col-sm-pull-6 col-xs-12">
                                        <div class="section-title mb-30">
                                        <h3>BANDEJA DE ENTRADA </h3>
                                    </div>
                                    COMPONENTE
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ABOUT SHELTEK AREA END -->
                </div>
            </div>
        <!-- FEATURED FLAT AREA END -->
    </section>
    <!-- End page content -->
</template>
<script>
import store from '../../store'
    export default {
        name: 'panelClient',
        computed: {
            client: () => store.state.client
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