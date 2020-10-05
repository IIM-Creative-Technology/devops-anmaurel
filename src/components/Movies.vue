<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <router-link to="/createMovie">
        <b-button class="btn" size="is-small" type="is-white" icon-left="plus"
          >ADD MOVIE</b-button
        ></router-link
      >
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <b-input
            v-model="search"
            type="text"
            placeholder="Search movie.."
            class="m-1t"
          ></b-input>
        </div>
      </div>
      <div class="columns is-multiline">
        <div
          class="column is-12"
          v-for="movie in filteredMovie"
          :key="movie.id"
        >
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="movie.img" alt="Film image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 has-text-black">
                    {{ movie.title }}
                  </p>
                  <p class="subtitle is-6 has-text-black">
                    {{ movie.year }}
                    <br />
                    {{ movie.lang }}
                  </p>
                </div>
              </div>

              <div class="content has-text-justified">
                {{ movie.desc }}
              </div>
              <div>
                <b-rate
                  icon-pack="fas"
                  v-model="movie.rate"
                  @change="success"
                ></b-rate>
              </div>
              <router-link :to="{ name: 'movie', params: { id: movie.id } }">
                <b-button
                  class="btn"
                  size="is-small"
                  type="is-primary"
                  icon-left="bullseye"
                  >SHOW DIRECTOR</b-button
                >
              </router-link>
              <router-link
                :to="{ name: 'updateMovie', params: { id: movie.id } }"
              >
                <b-button
                  class="btn"
                  size="is-small"
                  type="is-primary"
                  icon-left="circle-edit-outline"
                  >EDIT</b-button
                ></router-link
              >
              <b-button
                class="btn"
                size="is-small"
                type="is-primary"
                icon-left="delete"
                @click="removeMovie(movie)"
                >DELETE
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'movies',
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters(['movies']),
    filteredMovie() {
      return this.movies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.year.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.real[0].firstName
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          movie.real[0].lastName
            .toLowerCase()
            .includes(this.search.toLowerCase())
        )
      })
    },
  },
  methods: {
    ...mapActions(['removeMovie']),
    success() {
      this.$buefy.toast.open('Note attribué !')
    },
  },
}
</script>

<style lang="scss">
.btn {
  margin: 0.5rem;
}
.card {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0.2rem;
}
.m-1t {
  margin-top: 1rem;
}
</style>
