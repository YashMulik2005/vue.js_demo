<template>
  <div>
    <section class="flex gap-3 p-2 border-b font-semibold justify-center">
      <RouterLink
        to="/"
        :class="{ 'bg-gray-500': path === '/' }"
        class="hover:text-white hover:bg-blue-950 px-2 py-[3px] rounded-lg"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="hover:text-white hover:bg-blue-950 px-2 py-[3px] rounded-lg"
        >About</RouterLink
      >
      <RouterLink
        to="/add"
        :class="{ 'bg-gray-500': path === '/add' }"
        class="hover:text-white hover:bg-blue-950 px-2 py-[3px] rounded-lg"
        >Add</RouterLink
      >
      <RouterLink
        to="/notes"
        :class="{ 'bg-gray-500': path === '/notes' }"
        class="hover:text-white hover:bg-blue-950 px-2 py-[3px] rounded-lg"
        >Notes</RouterLink
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      title: "yash",
    };
  },
  computed: {
    path() {
      return this.$store.state.navState;
    },
  },
};
</script>

<style scoped></style>
