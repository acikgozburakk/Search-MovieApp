<template>
  <div id="movies">
    <div class="movie-container">
      <div class="image-container">
        <img :src="getdata.Poster" />
      </div>
      <div class="info">
        <h3 class="title">{{ getdata.Title }}</h3>

        <div class="action_container">
          <i
            v-if="HomeClick"
            :class="{ is_favourite: clicked }"
            @click="AddToFavourite"
            class="fa fa-heart"
          ></i>
          <i
            v-if="!HomeClick"
            @click="DeleteFromFavourite"
            :class="{ is_favourite: true }"
            class="fa fa-heart"
            >Favorilerden çıkar</i
          >

          <a
            :href="`https://www.imdb.com/title/${getdata.imdbID}/?ref_=vp_vi_tt_p`"
            target="_blank"
            class="button"
            >IMDb</a
          >
        </div>
      </div>
    </div>
  </div>
  <p style="font-size: 25px" v-if="msgstatus">
    Aradığınız film bulunmamaktadır
  </p>
</template>

<script>
import axios from "axios";

export default {
  props: ["getdata", "moviestatus", "msgstatus", "HomeClick"],
  data() {
    return {
      favouriteList: [],
      clicked: null,
    };
  },
  methods: {
    redirect() {
      this.$router.push({
        path: `https://www.imdb.com/title/${getdata.imdbID}/?ref_=vp_vi_tt_p`,
      });
    },
    AddToFavourite() {
      this.clicked = true;
      axios
        .post("http://localhost:3000/favouites", this.getdata)
        .then((add_favourite_response) => {
          console.log("add favpourite rtesponse ", add_favourite_response);
        });
    },
    DeleteFromFavourite(id) {
      axios
        .delete(`http://localhost:3000/favouites/${this.getdata.id}`)
        .then((delete_response) => {
          console.log("Delete Response", delete_response);
          this.$emit("movie-delete-event", this.getdata);
        })
        .catch((e) => console.log("delete error", e));
    },
  },

  // Burası film daha sonra arandığında kalbin boyalı olması için yapıldı.Başarılı olunamadı //
};
</script>