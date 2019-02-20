<template>
    <!-- TESTIMONIAL AREA START -->
        <div class="testimonial-area pb-115">
            <div class="container">
                <div class="row">
                    <properties-app :properties="properties"></properties-app>
                </div>
            </div>
        </div>
    <!-- TESTIMONIAL AREA END -->       
</template>
<script>
import store from '../../store'
import properties from '../../components/properties_client/properties_panel.vue'
export default {
    name: 'Recommended',
    components: {
        'properties-app':properties
    },
    computed: {
        properties: () => store.state.properties
    }
}
</script>