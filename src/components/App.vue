<template>
  <div>
      <Header></Header>

      <router-view></router-view>

      <Footer></Footer>
  </div>  
</template>
<script src="../../src/assets/website/js/vendor/modernizr-2.8.3.min.js"></script>
 <!-- jquery latest version -->
     <script src="../../src/assets/website/js/vendor/jquery-3.1.1.min.js"></script>
     <!-- Bootstrap framework js -->
     <script src="../../src/assets/website/js/bootstrap.min.js"></script>
     <!-- Nivo slider js -->    
     <script src="../../src/assets/website/lib/js/jquery.nivo.slider.js"></script>
     <!-- ajax-mail js -->
     <script src="../../src/assets/website/js/ajax-mail.js"></script>
     <!-- All js plugins included in this file. -->
     <script src="../../src/assets/website/js/plugins.js"></script>
     <!-- Main js file that contents all jQuery plugins activation. -->
     <script src="../../src/assets/website/js/main.js"></script>
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
  @import "../assets/website/css/bootstrap.css";
  @import "../assets/website/lib/css/nivoslider.css";
  @import "../assets/website/css/core.css";
  @import "../assets/website/css/shortcode/shortcodes.css";
  @import "../assets/website/style.css";
  @import "../assets/website/css/responsive.css";
  @import "../assets/website/css/color/color-core.css";
  @import "../assets/website/css/custom.css";
</style>
<style lang="scss">
    @import "../sass/app";
</style>


