<template>
  <h1>Your Notes</h1>
  <div v-if="notes.length" class="grid grid-cols-3">
    <section
      v-for="note in notes"
      :key="note.id"
      class="border p-4 cursor-pointer"
      @click="openSingleNOte(note.title)"
    >
      <h1>{{ note.title }}</h1>
      <h1>{{ note.des }}</h1>
    </section>
  </div>
  <div v-else>
    <h1>ADD FIRST NOTE</h1>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data() {
    return {
      notes: [],
      id: 1,
    };
  },
  mounted() {
    if (localStorage.getItem("notes")) {
      this.notes = JSON.parse(localStorage.getItem("notes"));
    }
    this.$store.state.navState = this.$route.path;
    console.log(this.$store.state.navState);
  },
  methods: {
    openSingleNOte(title) {
      this.$router.push("/notes/" + title);
    },
  },
};
</script>
