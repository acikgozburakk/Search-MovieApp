<template>
  <div class="container">
    <search-input @search="searchData" />

    <movie-item
      v-for="movie in movieList"
      :key="movie.imdbID"
      :getdata="movie"
      :moviestatus="moviestatus"
      :msgstatus="msgstatus"
      :HomeClick="true"
    />
  </div>
</template>

<script>
import axios from "axios";
import movieItem from "../components/movieItem";
import searchInput from "../components/searchInput";
export default {
  data() {
    return {
      movieList: [],
      moviestatus: false,
      msgstatus: false,
    };
  },
  components: {
    movieItem,
    searchInput,
  },
  methods: {
    searchData(searchtext) {
      axios
        .get(`http://www.omdbapi.com/?apikey=8e9e095e&s=${searchtext}`)
        .then((get_response) => {
          console.log("get_response", get_response.data.Search);
          this.movieList = get_response.data.Search;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
