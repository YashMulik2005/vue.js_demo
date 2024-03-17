<template>
  <div class="m-5 border p-4 bg-[#f5f5f5]">
    <h1 class="font-bold text-xl my-3">Add Note</h1>
    <form class="flex flex-col gap-2" @submit.prevent="handlesubmiit">
      <label>Title:</label>
      <input
        v-model="title"
        type="text"
        class="px-2 py-[5px] rounded-md border focus:outline-none"
      />
      <label>Description:</label>
      <textarea
        v-model="description"
        rows="5"
        cols="5"
        class="px-2 py-[5px] rounded-md border focus:outline-none"
      ></textarea>

      <button
        type="submit"
        class="bg-blue-950 text-white px-2 py-[4px] rounded inline font-semibold my-2"
      >
        ADD NOTE
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      title: "",
      description: "",
      id: 1,
      notes: [],
    };
  },
  mounted() {
    if (localStorage.getItem("notes")) {
      this.notes = JSON.parse(localStorage.getItem("notes"));
    }
    console.log(this.notes);
    this.$store.state.navState = this.$route.path;
    console.log(this.$store.state.navState);
  },
  methods: {
    handlesubmiit() {
      let note = {
        id: this.id++,
        title: this.title,
        des: this.description,
      };
      const new_notes = [note, ...this.notes];
      this.notes = new_notes;
      localStorage.setItem("notes", JSON.stringify(new_notes));
    },
  },
};
</script>
