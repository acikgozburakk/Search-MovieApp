<template>
  <div>
    <div id="app">
      <input
        type="text"
        placeholder="Film adını yazın ve enter tuşuna basın..."
        class="search_text"
        v-model="searchtext"
        @keydown.enter="searchMovie"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchtext: "",
    };
  },
  methods: {
    searchMovie() {
      this.$emit("search", this.searchtext);
    },
  },
};
</script>