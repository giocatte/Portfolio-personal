<template>
  <div>
    <!-- <h2 class="mb-5 text-4xl">{{ $t("About") }} me</h2> -->
    <div class="relative mt-4 sm:mt-10 p-2 grid items-start gap-y-20">
      <div
        class="w-1/2 h-[calc(100%_-_2.5rem)] absolute top-5 left-0 border-palette-800 border-r-[3px]"
      ></div>
      <div class="neomorph left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
      <div class="neomorph right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
      <div class="neomorph left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
      <div class="neomorph right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.neomorph {
  border-radius: 25px;
  background: #aee5e9;
  @apply w-72 h-96 sm:w-[40%] sm:aspect-[5/3] sm:h-[auto] py-10 px-6 text-justify overflow-y-hidden z-10;
  &.left {
    box-shadow: 30px -30px 60px #94c3c6, -30px 30px 60px #c8ffff;
  }
  &.right {
    box-shadow: -30px -30px 60px #94c3c6, 30px 30px 60px #c8ffff;
    @apply justify-self-end;
  }
  & p {
    @apply text-sm;
  }
}
</style>
