<template>
    <div class="testimonial mt-30">
            <div class="row">
                <div class="col-md-2 col-sm-12">
                    <div class="testimonial-image">
                        <img :src="property.main_image.url" alt="">
                    </div>
                </div>
                <div class="col-md-10 col-sm-12">
                    <div class="section-title mb-30">
                        <h3>{{ property.title }}</h3>
                        <h2 class="h1">
                            <span v-if="property.for_sale == 'true'" class="price">{{ property.sale_price_label}}</span>
                            <span v-if="property.for_rent == 'true'" class="price">{{ property.rent_price_label}}</span>
                            <span v-if="property.for_transfer == 'true'" class="price">{{ property.rent_price_label }} / {{ property.sale_price_label }}</span>
                        </h2>
                    </div>
                    <div class="testimonial-carousel dots-right-btm">
                        <!-- testimonial-item -->
                        <div class="testimonial-item">
                            <div class="testimonial-brief">
                                <p v-html="property.observations"></p>
                            </div>
                            <div class="btn-group">
                                <a href="" class="btn btn-success">Contactar con un vendedor</a>
                                <a href="" class="btn btn-default">Eliminar como recomendado</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'properties_panelItem',
    props:['property']
}
</script>