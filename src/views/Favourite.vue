<template>
  <div>
    <movieItem
      v-for="favourite in favouriteList"
      :key="favourite.imdbI"
      :getdata="favourite"
      :moviestatus="true"
      :favouriteList="favouriteList"
      @movie-delete-event="refreshList"
    />
    <h3 style="margin-top: 50px">{{ msg }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import movieItem from "../components/movieItem";
export default {
  components: {
    movieItem,
  },
  data() {
    return {
      favouriteList: [],
      msg: "",
    };
  },

  created() {
    axios.get("http://localhost:3000/favouites").then((get_response) => {
      console.log("get_rsponse", get_response);
      this.favouriteList = get_response.data;
    });
  },
  methods: {
    refreshList(contact) {
      this.favouriteList = this.favouriteList.filter(
        (i) => i.id !== contact.id
      );
    },
  },
  updated() {
    if (this.favouriteList.length == 0) {
      this.msg = "FAVORİNİZ BULUNMAMAKTADIR...";
    } else {
      this.msg = "";
    }
  },
};
</script>