<script>
import axios from "axios";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";

export default {
  name: "apitest",
  data() {
    return {
      apidata: [],
      topic: "all",
      loader: false,
    };
  },
  components: {
    BeatLoader,
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      this.loader = true;
      const res = await axios.get("https://api.publicapis.org/entries");
      console.log(res);
      this.loader = false;
    },
    changetopic() {
      if (this.topic === "all") {
        this.topic = "cricket";
      } else {
        this.topic = "all";
      }
    },
  },
  watch: {
    topic(new_value, old_value) {
      this.getdata();
      console.log("watch run");
    },
  },
};
</script>

<template>
  <section v-if="loader">
    <BeatLoader />
  </section>
  <h1 v-else>Test</h1>
  <h1>{{ topic }}</h1>
  <button @click="changetopic">change</button>
</template>
