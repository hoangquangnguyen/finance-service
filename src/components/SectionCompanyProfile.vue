<template>
  <div class="lg:h-[500px]">
    <div class="mx-[50px] my-[60px] flex flex-col items-center lg:mx-[150px]">
      <h2 class="text-2xl font-bold lg:text-3xl">
        Company Profile<span class="text-primary-color">.</span>
      </h2>
      <span class="text-base text-primary-color">short introduction</span>
      <div class="mt-[60px] flex flex-col items-center gap-x-4 lg:flex-row">
        <img src="@/assets/Group1000002554.png" alt="" class="lg:w-1/2" />
        <p class="mt-[60px] text-ellipsis leading-6 lg:mt-0 lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
