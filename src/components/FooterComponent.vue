<template>
  <footer
    class="relative flex h-[700px] flex-col bg-[#232120] text-white md:h-[400px]"
  >
    <div
      class="mt-[60px] ml-[60px] flex flex-col items-start justify-between md:flex-row"
    >
      <div class="flex w-2/3 flex-col items-start justify-around md:flex-row">
        <!-- logo -->
        <div class="flex flex-col gap-y-[10px] md:mt-[30px]">
          <img src="@/assets/logo.svg" alt="" class="bg-mygradiant h-14 w-14" />
          <span>+84 - 1234567890</span>
          <span>Rockefeller PlazaNew York, NY 10112</span>
        </div>
        <div class="mt-[30px] flex flex-row gap-x-[60px]">
          <!-- Learn more -->
          <div class="flex flex-col gap-y-[10px]">
            <h2 class="text-lg font-bold">Learn More</h2>
            <a href="">How it work</a>
            <a href="">Who we are</a>
            <a href="">Careers</a>
            <a href="">Blog</a>
            <a href="">FAQ</a>
          </div>
          <!-- Social -->
          <div class="flex flex-col gap-y-[10px]">
            <h2 class="text-lg font-bold">Social</h2>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Pinterest</a>
            <a href="">Linkedin</a>
          </div>
        </div>
      </div>
      <!-- Download -->
      <div class="mt-[30px] flex w-1/3 flex-col gap-y-[10px] md:ml-[30px]">
        <h2 class="text-lg font-bold">Downloads</h2>
        <a href=""><img src="@/assets/googleplay.svg" alt="" /></a>
        <a href=""><img src="@/assets/appstore.svg" alt="" /></a>
      </div>
    </div>

    <!-- bottom -->
    <div
      class="absolute bottom-0 right-3 flex flex-col items-end justify-between pb-[20px] text-xs md:items-center md:text-sm"
    >
      <hr class="h-[1px] w-screen bg-white" />
      <div
        class="mt-[20px] flex flex-col items-end justify-between md:flex-row md:items-center md:gap-x-[50px]"
      >
        <span>Copyright © 2022 Company Name All rights reserved</span>
        <div
          class="mt-[10px] flex flex-row items-center justify-between gap-4 md:mt-0"
        >
          <a href="">Term of use</a>
          <a href="">Privacy Police</a>
          <a href="">Cardholder Agreement</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  props: {
    msg: String,
  },
});
</script>
