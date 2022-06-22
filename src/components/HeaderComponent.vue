<template>
  <header class="relative z-10 h-[500px]">
    <div
      class="relative z-10 flex items-center justify-between px-6 py-[10px] lg:py-[30px]"
    >
      <img src="@/assets/logo.svg" alt="" class="h-24 w-24" />
      <ul class="hidden items-center gap-x-14 lg:flex">
        <div class="text-primary-color">
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Explore</a>
        </div>
        <div>
          <button class="bg-primary-color py-2 px-9 text-white">
            Get Started
          </button>
        </div>
      </ul>
    </div>
    <div
      class="relative z-10 mx-auto mt-[20px] flex flex-col items-center lg:ml-[100px] lg:items-start"
    >
      <h2
        class="max-w-[300px] text-center text-3xl font-bold lg:max-w-[768px] lg:text-left lg:text-5xl"
      >
        Your Strategy Is Only As Good As You Execute It.
      </h2>
      <button class="mt-4 bg-primary-color py-2 px-9 text-white">
        Get Started
      </button>
    </div>
    <div class="absolute top-0 left-0 z-0 h-full w-full bg-hero-pattern"></div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>
