<template>
  <div>
      <Header></Header>

      <router-view></router-view>

      <Footer></Footer>
  </div>  
</template>
<script type="module">
  import "/src/assets/website/js/vendor/modernizr-2.8.3.min.js"
  import "/src/assets/website/js/vendor/jquery-3.1.1.min.js"
  import "/src/assets/website/js/bootstrap.min.js"
  import "/src/assets/website/lib/js/jquery.nivo.slider.js"
  import "/src/assets/website/js/ajax-mail.js"
  import "/src/assets/website/js/plugins.js"
  import "/src/assets/website/js/main.js"
</script>
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
  @import "../assets/website/css/bootstrap.min.css";
  @import "../assets/website/lib/css/nivo-slider.css";
  @import "../assets/website/css/core.css";
  @import "../assets/website/css/shortcode/shortcodes.css";
  @import "../assets/website/style.css";
  @import "../assets/website/css/responsive.css";
  @import "../assets/website/css/color/color-core.css";
  @import "../assets/website/css/custom.css";
</style>
<style lang="scss">
    //@import "../sass/app";
</style>



