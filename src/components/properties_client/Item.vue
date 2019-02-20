<template>
    <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="flat-item">
            <div class="flat-item-image">
                <span v-if="property.for_sale == 'true'" class="for-sale">Venta</span>
                <span v-if="property.for_rent == 'true'" class="for-sale">Arriendo</span>
                <span v-if="property.for_transfer == 'true'" class="for-sale">Arriendo/Venta</span>
                <a href="#!"  @click="select"><img :src="property.main_image.url" alt=""></a>
                <div class="flat-link">
                    <a href="#!"  @click="select">Ver Detalles</a>
                </div>
                <ul class="flat-desc">
                    <li>
                        <img src="/src/assets/website/images/icons/4.png" alt="">
                        <span>{{ property.area }}</span>
                    </li>
                    <li>
                        <img src="/src/assets/website/images/icons/5.png" alt="">
                        <span>{{ property.bedrooms }}</span>
                    </li>
                    <li>
                        <img src="/src/assets/website/images/icons/6.png" alt="">
                        <span>{{ property.bathrooms }}</span>
                    </li>
                    <li>
                        <img src="/src/assets/website/images/icons/13.png" alt="">
                        <span>{{ property.stratum }}</span>
                    </li>
                </ul>
            </div>
            <div class="flat-item-info">
                <div class="flat-title-price">
                    <h5><a href="#!" @click.prevent="details_property">{{ property.title | capitalizeAll }} </a></h5>
                    
                </div>
                <span v-if="property.for_sale == 'true'" class="price pull-right">{{ property.sale_price_label}}</span>
                <span v-if="property.for_rent == 'true'" class="price pull-right">{{ property.rent_price_label}}</span>
                <span v-if="property.for_transfer == 'true'" class="price pull-right">{{ property.rent_price_label }} / {{ property.sale_price_label }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Item-property',
    props:['property'],
    filters: {
       uppercase: function (str) {
            return str.toUpperCase()
        },
        lowercase: function (str) {
            return str.toLowerCase()
        },
        capitalize: function (str) {
            str = str.toLowerCase()
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        capitalizeAll: function (str) {
            return str.replace(/\w\S*/g, function(str) { 
                return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
            })
        }
    },
    methods:{
        details_property(){
            this.$router.push('/properties/'+this.property.id_property);
        },
        select() {
            let route = { name: 'properties.details', params: {id: this.property.id}};
            console.log(route);
            this.$router.push(route);
        }
    }
}
</script>
<style lang="scss">
    .price {
        font-size: 18px;
    }
</style>