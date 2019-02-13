<template>
	<div class="container">
		<div class="slider">
			<div class="slide">
				<img :src="getCurrentImage.url" :alt="getCurrentImage.text">
			</div>
		</div>
		<button @click="prevSlide" :disabled="currentSlide===0" class="submit-btn-1">Anterior</button>
		<button @click="nextSlide" :disabled="currentSlide===images.length - 2" class="submit-btn-1">Siguiente</button>
	</div>	
</template>
<script>
	export default {
		name: 'item-images',
		data () {
			return {
				currentSlide: 0
			}
		},
		props:['images'],	
	  computed: {
	    getCurrentImage() {
	      return this.images[this.currentSlide]
	    }
	  },
	  methods: {
	    nextSlide() {
	      let max = this.images.length - 1
	      let current = this.currentSlide
	      if(current != max) this.currentSlide++
	    },
	    prevSlide() {
	      let min = 0
	      let current = this.currentSlide
	      if(current >= min) this.currentSlide--
	    }
	  }
	}
</script>