<template>
  <div>
  <div>
    <p>hello, here I will place my projects :P</p>
    <div
      class="w-full flex flex-row flex-wrap content-center justify-start items-stretch relative z-0 gap-x-12"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <ProjectCard
        v-for="p in projects"
        :key="p.id"
        :project="p"
        :isHovered="isHovered"
        @hoverState="updateHoverState"
      ></ProjectCard>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ref, onMounted } from "vue";
import ProjectCard from "~/components/ProjectCard.vue";

const projects = ref([]);
const isHovered = ref(false);

const onMouseEnter = () => {
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
};

const updateHoverState = (state) => {
  isHovered.value = state;
};

onMounted(async () => {
  const response = await fetch("/api/projects");
  const data = await response.json();
  projects.value = data.projects;
});
</script>

<style lang="scss" scoped>
.project {
  transition: all 0.3s ease-in-out;
  &.hovered {
    transform: scale(1.1, 1.1);
  }
  &.blurred {
    filter: blur(10px);
    transform: scale(0.9);
  }
}
</style>
