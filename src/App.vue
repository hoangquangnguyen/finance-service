<template>
  <div class="app overflow-x-hidden">
    <HeaderComponent />
    <!-- Section2 Compani profile -->
    <SectionCompanyProfile />
    <!-- Section3 Dream big Do right-->
    <SectionDreamBigDoRight />
    <!-- Section4 Our Amazing Partners-->
    <SectionOurAmazingPartners />
    <!-- Section5 Customer service-->
    <SectionCustomerService />
    <!-- Section6 Get In Touch.-->
    <SectionGetInTouch />
    <!-- FOOTER -->
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SectionCompanyProfile from "./components/SectionCompanyProfile.vue";
import SectionDreamBigDoRight from "./components/SectionDreamBigDoRight.vue";
import SectionOurAmazingPartners from "./components/SectionOurAmazingPartners.vue";
import SectionCustomerService from "./components/SectionCustomerService.vue";
import SectionGetInTouch from "./components/SectionGetInTouch.vue";

export default defineComponent({
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent,
    SectionCompanyProfile,
    SectionDreamBigDoRight,
    SectionOurAmazingPartners,
    SectionCustomerService,
    SectionGetInTouch,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
</style>
