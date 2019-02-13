<template>
    <div class="row">
        <div class="col-xs-12 col-md-8">
            <div class="blog-details-area">
                <!-- blog-details-image -->
                <div class="blog-details-image">
                </div>
                <!-- blog-details-title-time -->
                <div class="blog-details-title-time ">
                    <div class="pull-right pr-50"><a href="" class="btn btn-success">Editar</a></div>
                    <h5>{{ property.title }}</h5>
                    <p>actualizado el {{ property.updated_at }}</p>

                </div>
                <!-- blog-details-desctiption -->
                <div class="blog-details-desctiption mb-60">
                    <div class="blog-quote">
                        <b>Descripción</b>
                        <p style="text-align: justify" v-html="property.observations"></p>
                    </div>
                 </div>
                 <!-- blog-details-reply -->
                <div class="blog-details-reply leave-review mb-50">
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <b v-if="property.for_sale == 'true'">Venta</b>
                                <p style="text-align: justify" v-if="property.for_sale == 'true'" v-html="property.sale_price_label"></p>
                                <b v-if="property.for_rent == 'true'">Arriendo</b>
                                <p style="text-align: justify" v-if="property.for_rent == 'true'" v-html="property.rent_price_label"></p>
                            </div>
                            <div class="col-md-6">
                                <b>Ubicado en</b>
                                <p style="text-align: justify">{{ property.city_label }} / {{ property.region_label }} en el pais de {{ property.country_label}}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    inject: ['$validator'],
    props: ['property'],
    data() {
        return {
            title: '',
            description: '',
            draft: clone(this.property)
        }
    },
    methods: {
        validateBeforeSubmit() {
            this.$emit('validateBeforeSubmit', this.draft);
        }
    }
}
</script>

<style lang="scss">
    .list-group-item.task-list-item {
        display: flex;
        justify-content: space-between;

        a {
            text-decoration: none;
        }

        .description {
            flex: 1;
            padding: 0 5px;
        }

        &.completed {
            &, a {
                color: #999;
            }

            .description {
                text-decoration: line-through;    
            }
        }
    }
</style>








