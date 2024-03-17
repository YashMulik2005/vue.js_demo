<script>
export default {
  name: "Note",
  data() {
    return {
      params: this.$route.params.id,
      note: {},
    };
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("notes"));
    let singlenote = data.filter((item) => {
      return item.title == this.params;
    });
    this.note = singlenote[0];
    console.log(this.note, 8998);
  },
};
</script>

<template>
  <section class="border mx-5 my-3 p-4">
    <h1>{{ this.note.title }}</h1>
    <h1>{{ this.note.des }}</h1>
  </section>
</template>
