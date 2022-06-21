<template>
  <div class="app overflow-x-hidden">
    <!-- Section1 Header -->
    <div class="relative z-10 h-[500px] bg-mygradiant">
      <header
        class="relative z-10 px-6 py-[30px] flex items-center justify-between"
      >
        <img src="./assets/logo.svg" alt="" class="h-24 w-24" />
        <ul class="flex gap-x-14 items-center">
          <li class="text-primary-color"><a href="">Home</a></li>
          <li><a href="">Explore</a></li>
          <li>
            <button class="py-2 px-9 bg-primary-color text-white">
              Get Started
            </button>
          </li>
        </ul>
      </header>
      <div class="relative z-10 ml-80 mt-[20px]">
        <h2 class="text-5xl font-bold max-w-3xl">
          Your strategy is only as good as you execute it.
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
    <div class="h-[500px]">
      <div class="mx-[150px] my-[60px] flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          Company Profile<span class="text-primary-color">.</span>
        </h2>
        <span class="text-primary-color text-base">short introduction</span>
        <div class="mt-[60px] flex items-center gap-x-4">
          <img src="./assets/Group1000002554.png" alt="" class="w-1/2" />
          <p class="leading-6">
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
    <div class="h-[600px] bg-mygradiant">
      <div class="mx-[150px] flex flex-col items-center">
        <span class="mt-[60px] text-primary-color text-base"
          >short introduction</span
        >
        <h2 class="font-bold text-3xl">
          Dream big Do right<span class="text-primary-color">.</span>
        </h2>
        <div class="mt-[60px] flex items-center gap-x-[50px]">
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
    <div class="h-[500px] bg-[#F2F2F2]">
      <div class="mx-[150px] pt-[60px] flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          Our Amazing Partners<span class="text-primary-color">.</span>
        </h2>
        <span class="text-primary-color text-base">short introduction</span>
        <div
          class="mt-[60px] grid grid-rows-3 grid-flow-col items-center gap-y-3 gap-x-6"
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
      class="h-[400px] px-[150px] my-[60px] flex flex-row items-center justify-between"
    >
      <div class="flex flex-col w-2/5">
        <h2 class="font-bold text-3xl">
          Customer service<span class="text-primary-color">.</span>
        </h2>
        <span class="text-primary-color text-base">short introduction</span>
        <span class="mt-[40px]">+84 - 1234567890</span>
        <span>finance@gmail.com</span>
        <span>Rockefeller PlazaNew York, NY 10112</span>
      </div>
      <img src="./assets/ggmap.png" alt="" class="w-3/5" />
    </div>
    <!-- Section6 Get In Touch.-->
    <div>
      <div class="h-[400px] bg-[#F2F2F2]">
        <div class="mx-[150px] pt-[60px] flex flex-col items-center">
          <h2 class="font-bold text-3xl">
            Get In Touch<span class="text-primary-color">.</span>
          </h2>
          <span class="text-primary-color text-base">short introduction</span>
          <div class="mt-6 w-full px-[100px] flex flex-row items-center">
            <div class="w-3/4 py-5 flex items-center bg-white">
              <input
                type="email"
                placeholder="Type your Email Address"
                class="w-full mx-3 outline-none p-0 font-bold"
              />
            </div>

            <button class="w-1/4 bg-primary-color p-5 font-medium text-white">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <footer class="relative h-[400px] flex flex-col bg-black text-white">
      <div class="flex flex-row items-start justify-between mt-[60px]">
        <div class="flex flex-row items-start justify-around w-2/3">
          <!-- loho -->
          <div class="flex flex-col gap-y-[10px]">
            <img
              src="./assets/logo.svg"
              alt=""
              class="bg-mygradiant h-14 w-14"
            />
            <span>+84 - 1234567890</span>
            <span>Rockefeller PlazaNew York, NY 10112</span>
          </div>
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
        <!-- Download -->
        <div class="flex flex-col w-1/3 gap-y-[10px]">
          <h2 class="font-bold text-lg">Downloads</h2>
          <a href=""><img src="./assets/googleplay.svg" alt="" /></a>
          <a href=""><img src="./assets/appstore.svg" alt="" /></a>
        </div>
      </div>

      <!-- bottom -->
      <div
        class="absolute bottom-0 py-[20px] flex flex-col items-center justify-between"
      >
        <hr class="w-screen h-[1px] bg-white" />
        <div
          class="mt-[20px] flex flex-row items-center justify-between gap-x-[50px]"
        >
          <span>Copyright © 2022 Company Name All rights reserved</span>
          <div class="flex flex-row items-center justify-between gap-4">
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
