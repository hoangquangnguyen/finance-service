<template>
  <div
    class="my-[60px] flex flex-col items-center justify-between px-[50px] lg:h-[400px] lg:flex-row lg:px-[150px]"
  >
    <div class="flex flex-col items-center lg:w-2/5 lg:items-start">
      <h2 class="text-2xl font-bold lg:text-3xl">
        Customer service<span class="text-primary-color">.</span>
      </h2>
      <span class="text-base text-primary-color">short introduction</span>
      <div class="mt-[40px] flex flex-col items-start">
        <span>+84 - 1234567890</span>
        <span>finance@gmail.com</span>
        <span>Rockefeller PlazaNew York, NY 10112</span>
      </div>
    </div>
    <img src="@/assets/ggmap.png" alt="" class="mt-[30px] lg:mt-0 lg:w-3/5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
