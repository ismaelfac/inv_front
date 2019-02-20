<template>
    <div class="col-md-12 col-xs-12">
        <item-property v-for="(property, index) in properties" :key="property.id"
                :properties="properties" :property="property" :index="index">
        </item-property>
    </div>
</template>
<script>
import Item from './properties_panelItem.vue'
export default {
    name: 'PropertiesPanel',
    components: {
        'item-property': Item
    },
    props:['properties']
}
</script>