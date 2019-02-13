<template>
    <div>
        <template>
           <list-properties :properties="properties"></list-properties>
        </template>
    </div>
</template>
<script>
import List_properties from './List.vue'
import store from '../../store'
export default {
    name:'properties',
    components: {
        'list-properties': List_properties
    },
    computed: {
        properties: () => store.state.properties
    }
}
</script>
