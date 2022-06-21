<template>
  <div class="app overflow-x-hidden">
    <!-- Section1 Header -->
    <div class="relative z-10 h-[500px]">
      <header
        class="relative z-10 px-6 py-[10px] xl:py-[30px] flex items-center justify-between"
      >
        <img src="./assets/logo.svg" alt="" class="h-24 w-24" />
        <ul class="hidden xl:flex gap-x-14 items-center">
          <div class="text-primary-color"><a href="">Home</a></div>
          <div><a href="">Explore</a></div>
          <div>
            <button class="py-2 px-9 bg-primary-color text-white">
              Get Started
            </button>
          </div>
        </ul>
      </header>
      <div
        class="relative z-10 mx-auto flex flex-col items-center xl:items-start xl:ml-80 mt-[20px]"
      >
        <h2
          class="text-3xl xl:text-5xl text-center xl:text-left max-w-[300px] xl:max-w-3xl font-bold"
        >
          Your Strategy Is Only As Good As You Execute It.
        </h2>
        <button class="py-2 px-9 mt-4 bg-primary-color text-white">
          Get Started
        </button>
      </div>
      <div
        class="absolute z-0 top-0 left-0 w-full h-full bg-hero-pattern"
      ></div>
    </div>
    <!-- Section2 Compani profile -->
    <div class="xl:h-[500px]">
      <div class="mx-[50px] xl:mx-[150px] my-[60px] flex flex-col items-center">
        <h2 class="font-bold text-2xl xl:text-3xl">
          Company Profile<span class="text-primary-color">.</span>
        </h2>
        <span class="text-primary-color text-base">short introduction</span>
        <div class="mt-[60px] flex flex-col xl:flex-row items-center gap-x-4">
          <img src="./assets/Group1000002554.png" alt="" class="xl:w-1/2" />
          <p class="leading-6 mt-[60px] xl:mt-0 text-ellipsis xl:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <!-- Section3 Dream big Do right-->
    <div class="lg:h-[600px] bg-mygradiant">
      <div class="mx-[50px] lg:mx-[150px] flex flex-col items-center">
        <span class="mt-[60px] text-primary-color text-base"
          >short introduction</span
        >
        <h2 class="font-bold text-2xl xl:text-3xl">
          Dream big Do right<span class="text-primary-color">.</span>
        </h2>
        <div
          class="mt-[60px] mb-[60px] flex flex-col lg:flex-row items-center gap-[50px]"
        >
          <!-- icon1 -->
          <div
            class="w-[250px] m-auto p-5 flex flex-col items-center bg-white rounded-md"
          >
            <img src="./assets/icon1.svg" alt="" />
            <p>Free shipping</p>
            <p class="text-center mt-4 text-gray-700">
              Enjoy Order in a hand using the fresness of groceries
            </p>
          </div>
          <!-- icon2 -->
          <div class="relative w-[250px] z-10">
            <div class="relative bg-white rounded-md flex z-10">
              <div class="m-5 flex flex-col items-center">
                <img src="./assets/icon2.svg" alt="" />
                <p>Free shipping</p>
                <p class="text-center mt-4 text-gray-700">
                  Enjoy Order in a hand using the fresness of groceries
                </p>
              </div>
            </div>
            <div
              class="absolute w-full h-full top-3 left-4 transform -rotate-2 rounded-md bg-primary-color z-0"
            ></div>
          </div>
          <!-- icon3 -->
          <div
            class="w-[250px] m-auto p-5 flex flex-col items-center bg-white rounded-md"
          >
            <img src="./assets/icon3.svg" alt="" />
            <p>Free shipping</p>
            <p class="text-center mt-4 text-gray-700">
              Enjoy Order in a hand using the fresness of groceries
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Section4 Our Amazing Partners-->
    <div class="lg:h-[500px] bg-[#F2F2F2]">
      <div class="mx-[50px] lg:mx-[150px] pt-[60px] flex flex-col items-center">
        <h2 class="font-bold text-2xl lg:text-3xl">
          Our Amazing Partners<span class="text-primary-color">.</span>
        </h2>
        <span class="text-primary-color text-base">short introduction</span>
        <div
          class="mt-[60px] grid grid-rows-4 lg:grid-rows-3 grid-flow-col items-center gap-y-3 gap-x-6 mb-[60px]"
        >
          <img src="./assets/logo-behance.png" alt="" />
          <img src="./assets/logo-uplabs.svg" alt="" />
          <img src="./assets/logo-behance.png" alt="" />
          <img src="./assets/logo-google.png" alt="" />
          <img src="./assets/logo-99designs.svg" alt="" />
          <img src="./assets/logo-uplabs.svg" alt="" />
          <img src="./assets/logo-uplabs.svg" alt="" />
          <img src="./assets/logo-behance.png" alt="" />
          <img src="./assets/logo-google.png" alt="" />
          <img src="./assets/logo-dribbble.png" alt="" />
          <img src="./assets/logo-google.png" alt="" />
          <img src="./assets/logo-dribbble.png" alt="" />
        </div>
      </div>
    </div>
    <!-- Section5 Customer service-->
    <div
      class="lg:h-[400px] px-[50px] lg:px-[150px] my-[60px] flex flex-col lg:flex-row items-center justify-between"
    >
      <div class="flex flex-col items-center lg:items-start lg:w-2/5">
        <h2 class="font-bold text-2xl lg:text-3xl">
          Customer service<span class="text-primary-color">.</span>
        </h2>
        <span class="text-primary-color text-base">short introduction</span>
        <div class="mt-[40px] flex flex-col items-start">
          <span>+84 - 1234567890</span>
          <span>finance@gmail.com</span>
          <span>Rockefeller PlazaNew York, NY 10112</span>
        </div>
      </div>
      <img src="./assets/ggmap.png" alt="" class="mt-[30px] lg:mt-0 lg:w-3/5" />
    </div>
    <!-- Section6 Get In Touch.-->
    <div>
      <div class="lg:h-[400px] bg-[#F2F2F2]">
        <div
          class="mx-[50px] lg:mx-[150px] pt-[60px] flex flex-col items-center"
        >
          <h2 class="font-bold text-2xl lg:text-3xl">
            Get In Touch<span class="text-primary-color">.</span>
          </h2>
          <span class="text-primary-color text-base">short introduction</span>
          <div
            class="mt-[30px] max-w-[700px] min-w-[300px] lg:min-w-[400px] mb-[60px] flex flex-row items-center"
          >
            <div class="w-[70%] py-4 flex items-center bg-white">
              <input
                type="email"
                placeholder="Type your Email Address"
                class="w-full mx-3 outline-none p-0 font-bold"
              />
            </div>

            <button
              class="w-[30%] py-4 h-full bg-primary-color px-[10px] lg:px-[20px] text-white"
            >
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <footer
      class="relative h-[700px] md:h-[400px] flex flex-col bg-[#232120] text-white"
    >
      <div
        class="flex flex-col md:flex-row items-start justify-between mt-[60px] ml-[60px]"
      >
        <div class="flex flex-col md:flex-row items-start justify-around w-2/3">
          <!-- logo -->
          <div class="flex flex-col gap-y-[10px]">
            <img
              src="./assets/logo.svg"
              alt=""
              class="bg-mygradiant h-14 w-14"
            />
            <span>+84 - 1234567890</span>
            <span>Rockefeller PlazaNew York, NY 10112</span>
          </div>
          <div class="flex flex-row gap-x-[60px] mt-[30px]">
            <!-- Learn more -->
            <div class="flex flex-col gap-y-[10px]">
              <h2 class="font-bold text-lg">Learn More</h2>
              <a href="">How it work</a>
              <a href="">Who we are</a>
              <a href="">Careers</a>
              <a href="">Blog</a>
              <a href="">FAQ</a>
            </div>
            <!-- Social -->
            <div class="flex flex-col gap-y-[10px]">
              <h2 class="font-bold text-lg">Social</h2>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">Pinterest</a>
              <a href="">Linkedin</a>
            </div>
          </div>
        </div>
        <!-- Download -->
        <div class="flex flex-col w-1/3 gap-y-[10px] mt-[30px] md:ml-[30px]">
          <h2 class="font-bold text-lg">Downloads</h2>
          <a href=""><img src="./assets/googleplay.svg" alt="" /></a>
          <a href=""><img src="./assets/appstore.svg" alt="" /></a>
        </div>
      </div>

      <!-- bottom -->
      <div
        class="absolute bottom-0 right-3 pb-[20px] text-xs md:text-sm flex flex-col items-end md:items-center justify-between"
      >
        <hr class="w-screen h-[1px] bg-white" />
        <div
          class="mt-[20px] flex flex-col md:flex-row items-end md:items-center justify-between md:gap-x-[50px]"
        >
          <span>Copyright © 2022 Company Name All rights reserved</span>
          <div
            class="flex flex-row items-center justify-between gap-4 mt-[10px] md:mt-0"
          >
            <a href="">Term of use</a>
            <a href="">Privacy Police</a>
            <a href="">Cardholder Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
</style>
