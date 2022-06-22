<template>
  <div class="bg-mygradiant lg:h-[600px]">
    <div class="mx-[50px] flex flex-col items-center lg:mx-[150px]">
      <span class="mt-[60px] text-base text-primary-color"
        >short introduction</span
      >
      <h2 class="text-2xl font-bold lg:text-3xl">
        Dream big Do right<span class="text-primary-color">.</span>
      </h2>
      <div
        class="mt-[60px] mb-[60px] flex flex-col items-center gap-[50px] lg:flex-row"
      >
        <!-- icon1 -->
        <div
          class="m-auto flex w-[250px] flex-col items-center rounded-md bg-white p-5"
        >
          <img src="@/assets/icon1.svg" alt="" />
          <p>Free shipping</p>
          <p class="mt-4 text-center text-gray-700">
            Enjoy Order in a hand using the fresness of groceries
          </p>
        </div>
        <!-- icon2 -->
        <div class="relative z-10 w-[250px]">
          <div class="relative z-10 flex rounded-md bg-white">
            <div class="m-5 flex flex-col items-center">
              <img src="@/assets/icon2.svg" alt="" />
              <p>Free shipping</p>
              <p class="mt-4 text-center text-gray-700">
                Enjoy Order in a hand using the fresness of groceries
              </p>
            </div>
          </div>
          <div
            class="absolute top-3 left-4 z-0 h-full w-full -rotate-2 transform rounded-md bg-primary-color"
          ></div>
        </div>
        <!-- icon3 -->
        <div
          class="m-auto flex w-[250px] flex-col items-center rounded-md bg-white p-5"
        >
          <img src="@/assets/icon3.svg" alt="" />
          <p>Free shipping</p>
          <p class="mt-4 text-center text-gray-700">
            Enjoy Order in a hand using the fresness of groceries
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
