<template>
  <div>
    <h2 class="mb-5 text-4xl">{{ $t("About") }} me</h2>
    <div class="relative p-2 grid items-start gap-y-20">
      <div
        class="w-1/2 h-[calc(100%_-_2.5rem)] absolute top-5 left-0 border-palette-800 border-r-2"
      ></div>
      <div class="neomorph1">
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
      <div class="neomorph2">
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
      <div class="neomorph1">
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
          sit distinctio repellat inventore nisi beatae eum explicabo earum
          voluptates?
        </p>
      </div>
      <div class="neomorph2">
        <p class="text-sm">
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
.neomorph1 {
  border-radius: 50px;
  background: #aee5e9;
  box-shadow: 30px -30px 60px #94c3c6, -30px 30px 60px #c8ffff;
  @apply w-72 h-96 py-10 px-6 text-justify overflow-y-hidden z-10;
}
.neomorph2 {
  border-radius: 50px;
  background: #aee5e9;
  box-shadow: -30px -30px 60px #94c3c6, 30px 30px 60px #c8ffff;
  @apply w-72 h-96 py-10 text-justify px-6 z-10 justify-self-end;
}
</style>
