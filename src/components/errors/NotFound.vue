<template>
	<section id="page-content" class="page-wrapper">
            <div class="blog-area pt-115 pb-120">
				<h2 style="text-align: center">Error 404: página no encontrada
					<router-link :to="{name: 'content'}"> Regresar al Inicio</router-link>
				</h2>
            </div>
	</section>
</template>

<script>
	export default {
		name:'NotFound'
	}
</script>