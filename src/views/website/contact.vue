<template>
    <div>
    <!-- Start page content -->
        <section id="page-content" class="page-wrapper">

            <!-- CONTACT AREA START -->
            <div class="contact-area pt-115 pb-115">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-xs-12">
                            <!-- get-in-toch -->
                            <div class="get-in-toch">
                                <div class="section-title mb-30">
                                    <h3>CONTACTANOS</h3>
                                </div>
                                <div class="contact-desc mb-50">
                                    <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Inversiones & Proyetos</span> is the best theme for  elit, sed do eiusmod tempor dolor sit ame   tse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip</p>
                                </div>
                                <ul class="contact-address">
                                    <li>
                                        <div class="contact-address-icon">
                                            <img src="/src/assets/website/images/icons/location-2.png" alt="">
                                        </div>
                                        <div class="contact-address-info">
                                            <span>{{ contacts.site }} </span>
                                            <span>{{ contacts.address }}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-address-icon">
                                            <img src="/src/assets/website/images/icons/phone-3.png" alt="">
                                        </div>
                                        <div class="contact-address-info">
                                            <span v-for="phone in contacts.phone" :key="phone.id">Telefonos {{ phone }}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-address-icon">
                                            <img src="/src/assets/website/images/icons/world.png" alt="">
                                        </div>
                                        <div class="contact-address-info">
                                            <span>Email : {{ contacts.email }}</span>
                                            <span>Web :<a> {{ contacts.web }}</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-7 col-xs-12">
                            <div class="contact-messge contact-bg">
                                <!-- blog-details-reply -->
                                <div class="leave-review">
                                    <h5>Dejanos tu mensaje</h5>
                                    <!-- Formulario de Contacto-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CONTACT AREA END -->

            <!-- SUBSCRIBE AREA START -->
                <subscribe></subscribe>
            <!-- SUBSCRIBE AREA END --> 
        </section>
    <!-- End page content -->
    </div>
    
</template>
<script>
import subscribe from '../../components/subscribe/subscribe.vue'
export default {
    name:'contact',
    components: {
        subscribe
    },
    data(){
        return{
            contacts: {
                site:'sitio de Inveriones',
                address: 'Direccion de Inversiones',
                phone: [
                    '3113232323',
                    '3213233'
                ],
                email: 'directora@inversionesyproyectos.com',
                web: 'Inversionesyproyectos.coms'
            }
        }
    }
}
</script>