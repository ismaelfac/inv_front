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
                            <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.compatible_requirements }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Requerimientos compatibles</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.requirements }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Mis Requerimientos</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <p class="query_text">{{ client.related_properties }}</p>
                                    <router-link tag="li" :to="{name: 'content'}"><a><h4 style="text-align:center">Mis Propiedades</h4></a></router-link>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <router-link tag="a" :to="{ name: 'tasks.create' }" class="btn btn-primary">Vincular un Inmueble</router-link>
                                <router-link tag="a" :to="{ name: 'tasks.create' }" class="btn btn-primary">Crear mi Clasificado</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="properties-details-area pb-60">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 pt-50">                                    
                                    <router-view></router-view>
                                </div>
                                <div class="col-md-4">
                                    <!-- widget-search-property -->
                                    <aside class="widget widget-search-property">
                                        <h5>Buscar una Propiedad</h5>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-3 col-xs-12">
                                                <div class="find-home-item custom-select">                  
                                                    <select class="selectpicker" title="Localización" data-hide-disabled="true" data-live-search="true">
                                                        <optgroup disabled="disabled" label="disabled">
                                                            <option>Hidden</option>
                                                        </optgroup>
                                                        <optgroup label="Australia">
                                                            <option>Sydney</option>
                                                            <option>Melbourne</option>
                                                            <option>Cairns</option>
                                                        </optgroup>
                                                        <optgroup label="USA">
                                                            <option>South Carolina</option>
                                                            <option>Florida</option>
                                                            <option>Rhode Island</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-3 col-xs-12">
                                                <div class="find-home-item custom-select">                  
                                                    <select class="selectpicker" title="Estado" data-hide-disabled="true" data-live-search="true">
                                                        <optgroup disabled="disabled" label="disabled">
                                                            <option>Hidden</option>
                                                        </optgroup>
                                                        <optgroup label="Australia">
                                                            <option>southeastern coast</option>
                                                            <option>southeastern tip</option>
                                                            <option>northwest corner</option>
                                                        </optgroup>
                                                        <optgroup label="USA">
                                                            <option>Charleston</option>
                                                            <option>St. Petersburg</option>
                                                            <option>Newport</option>
                                                        </optgroup>
                                                    </select>
                                                </div> 
                                            </div>
                                            <div class="col-md-6 col-sm-3 col-xs-12">
                                                <div class="find-home-item">
                                                    <input type="text" name="min-area" placeholder="Min area (sqft)">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-3 col-xs-12">
                                                <div class="find-home-item">
                                                    <input type="text" name="max-area" placeholder="Max area (sqft)">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-3 col-xs-12">
                                                <div class="find-home-item  custom-select">                  
                                                    <select class="selectpicker" title="No. of Beadrooms" data-hide-disabled="true">
                                                        <optgroup  label="1">
                                                            <option label="1">1 Beadrooms</option>
                                                            <option>2 Beadrooms</option>
                                                            <option>3 Beadrooms</option>
                                                            <option>4 Beadrooms</option>
                                                            <option>5 Beadrooms</option>
                                                        </optgroup>
                                                    </select>
                                                </div> 
                                            </div>
                                            <div class="col-md-6 col-sm-3 col-xs-12">
                                                <div class="find-home-item custom-select">                  
                                                    <select class="selectpicker" title="No. of Bathrooms" data-hide-disabled="true">
                                                        <optgroup label="2">
                                                            <option>1 Bathrooms</option>
                                                            <option>2 Bathrooms</option>
                                                            <option>3 Bathrooms</option>
                                                            <option>4 Bathrooms</option>
                                                            <option>5 Bathrooms</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-xs-12">
                                                <div class="row">
                                                    <div class="col-md-12 col-sm-7 col-xs-12">
                                                        <div class="find-home-item">
                                                            <!-- shop-filter -->
                                                            <div class="shop-filter">
                                                                <div class="price_filter">
                                                                    <div class="price_slider_amount">
                                                                        <input type="submit"  value="You range :"/> 
                                                                        <input type="text" id="amount" name="price"  placeholder="Add Your Price" /> 
                                                                    </div>
                                                                    <div id="slider-range"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-sm-5 col-xs-12">
                                                        <div class="find-home-item">
                                                            <a class="button-1 btn-block btn-hover-1" href="#">BUSCAR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                    <!-- widget-featured-property -->
                                    <aside class="widget widget-featured-property">
                                        <h5>Propiedades recomendadas</h5>
                                        <div class="row">
                                            <!-- flat-item -->
                                            <div class="col-md-12 col-sm-6 col-xs-12">
                                                <div class="flat-item">
                                                    <div class="flat-item-image">
                                                        <span class="for-sale">For Sale</span>
                                                        <a href="#"><img src="/src/assets/website/images/flat/1.jpg" alt=""></a>
                                                        <div class="flat-link">
                                                            <a href="#">More Details</a>
                                                        </div>
                                                        <ul class="flat-desc">
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/4.png" alt="">
                                                                <span>450 sqft</span>
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/5.png" alt="">
                                                                <span>5</span>
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/6.png" alt="">
                                                                <span>3</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="flat-item-info">
                                                        <div class="flat-title-price">
                                                            <h5><a href="#">Masons de Villa </a></h5>
                                                            <span class="price">$52,350</span>
                                                        </div>
                                                        <p><img src="/src/assets/website/images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- flat-item -->
                                            <div class="col-md-12 col-sm-6 col-xs-12">
                                                <div class="flat-item">
                                                    <div class="flat-item-image">
                                                        <span class="for-sale">For Sale</span>
                                                        <a href="#"><img src="/src/assets/website/images/flat/2.jpg" alt=""></a>
                                                        <div class="flat-link">
                                                            <a href="#">More Details</a>
                                                        </div>
                                                        <ul class="flat-desc">
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/4.png" alt="">
                                                                <span>450 sqft</span>
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/5.png" alt="">
                                                                <span>5</span>
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/6.png" alt="">
                                                                <span>3</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="flat-item-info">
                                                        <div class="flat-title-price">
                                                            <h5><a href="#">Masons de Villa </a></h5>
                                                            <span class="price">$52,350</span>
                                                        </div>
                                                        <p><img src="/src/assets/website/images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- flat-item -->
                                            <div class="col-md-12 hidden-sm col-xs-12">
                                                <div class="flat-item">
                                                    <div class="flat-item-image">
                                                        <span class="for-sale">For Sale</span>
                                                        <a href="#"><img src="/src/assets/website/images/flat/3.jpg" alt=""></a>
                                                        <div class="flat-link">
                                                            <a href="#">More Details</a>
                                                        </div>
                                                        <ul class="flat-desc">
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/4.png" alt="">
                                                                <span>450 sqft</span>
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/5.png" alt="">
                                                                <span>5</span>
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/website/images/icons/6.png" alt="">
                                                                <span>3</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="flat-item-info">
                                                        <div class="flat-title-price">
                                                            <h5><a href="#">Masons de Villa </a></h5>
                                                            <span class="price">$52,350</span>
                                                        </div>
                                                        <p><img src="/src/assets/website/images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                    <!-- widget-video -->
                                    <aside class="widget widget-video">
                                        <h5>Categorias</h5>
                                        
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
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