<template>
  <div>
      <Header></Header>

      <router-view></router-view>

      <Footer></Footer>
  </div>  
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="css">
  
  /*@import "../assets/website/lib/css/nivoslider.css";
  @import "../assets/website/css/core.css";
  @import "../assets/website/css/shortcode/shortcodes.css";
  @import "../assets/website/style.css";
  @import "../assets/website/css/responsive.css";
  @import "../assets/website/css/color/color-core.css";
  @import "../assets/website/css/custom.css";*/
</style>
<style lang="scss">
    //@import "../sass/app";
</style>


