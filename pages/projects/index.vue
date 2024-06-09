<template>
  <div>
    <p>hello, here I will place my projects :P</p>
    <div
      class="w-full flex flex-row flex-wrap content-center justify-start items-stretch flexor"
    >
      <ProjectCard
        v-for="p in projects"
        :key="p.id"
        :project="p"
      ></ProjectCard>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProjectCard from "~/components/ProjectCard.vue";

const projects = ref([]);

onMounted(async () => {
  const response = await fetch("/api/projects");
  const data = await response.json();
  projects.value = data.projects;
});
</script>

<style lang="scss" scoped>
.flexor {
  &:hover {
    > .flexor {
      &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0px 0px 10px 1px #8695ec;
      }
      &:not(:hover) {
        filter: blur(10px);
        transform: scale(0.9);
      }
    }
  }
}
</style>
