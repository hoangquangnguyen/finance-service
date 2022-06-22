<template>
  <div>
    <div class="bg-[#F2F2F2] lg:h-[400px]">
      <div class="mx-[50px] flex flex-col items-center pt-[60px] lg:mx-[150px]">
        <h2 class="text-2xl font-bold lg:text-3xl">
          Get In Touch<span class="text-primary-color">.</span>
        </h2>
        <span class="text-base text-primary-color">short introduction</span>
        <div
          class="mt-[30px] mb-[60px] flex min-w-[300px] max-w-[700px] flex-row items-center lg:min-w-[400px]"
        >
          <div class="flex w-[70%] items-center bg-white py-4">
            <input
              type="email"
              placeholder="Type your Email Address"
              class="mx-3 w-full p-0 font-bold outline-none"
            />
          </div>

          <button
            class="h-full w-[30%] bg-primary-color py-4 px-[10px] text-white lg:px-[20px]"
          >
            Send Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
