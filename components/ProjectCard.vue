<template>
  <article
    v-if="project"
    class="w-[250px] transition-all duration-150 ease-in-out rounded-[10px] cursor-pointer white hover:shadow-[10px_10px_0_#4e84ff,20px_20px_0_#4444bd] hover:border-[#0578c5] hover:transform hover:translate-[-20px,-20px] active:shadow-none active:transform active:translate-[0,0]"
  >
    <div class="rounded-lg w-full h-[170px] bg-gray-400"></div>
    <div class="flex flex-col gap-[20px] pt-[20px] p-[10px]">
      <div class="flex justify-between items-center">
        <div
          class="text-base font-semibold text-black whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {{ project.Title }}
        </div>
        <div
          class="w-[50px] h-[50px] p-[9px] rounded-full transition-all duration-300 ease transform hover:rotate-[-45deg] hover:bg-[#a6c2f0]"
        >
          <svg
            class="text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            stroke-linejoin="round"
            stroke-linecap="round"
            viewBox="0 0 24 24"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <line y2="12" x2="19" y1="12" x1="5"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
      <div class="flex gap-[10px]">
        <span
          class="bg-[rgba(165,96,247,0.43)] text-[rgb(85,27,177)] font-bold py-[0.3em] px-[0.7em] rounded-[15px] text-[12px] tracking-[-0.6px]"
          >• Analytics</span
        >
        <span
          class="bg-[#b2b2fd] text-[#1a41cd] font-bold py-[0.3em] px-[0.7em] rounded-[15px] text-[12px] tracking-[-0.6px]"
          >• Dashboards</span
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: ["project"],
};
</script>

<style lang="scss" scoped></style>
