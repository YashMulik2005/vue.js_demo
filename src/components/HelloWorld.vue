<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      path: "",
      nav: "",
      model: false,
    };
  },
  mounted() {
    this.path = this.$route.path;
    this.$store.state.navState = this.path;
    console.log(this.$store.state.navState);
  },
  methods: {
    toggleModel() {
      this.model = !this.model;
    },
  },
};
</script>

<template>
  <div class="" @click.self="toggleModel">
    <h1 class="text-red-500">{{ this.$store.state.navState }}</h1>
    <button @click="toggleModel" class="border p-2">open</button>
    <div
      :class="{ hidden: model === false }"
      class="h-[70vh] w-[80%] m-auto bg-[#f5f5f5] border"
    ></div>
    <RouterView />
  </div>
</template>

<style scoped></style>
