<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">
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
            <br />
          </div>
          <router-link to="/">
            <b-button
              class="btn"
              size="is-small"
              type="is-primary"
              icon-left="backspace"
              >BACK TO LIST</b-button
            >
          </router-link>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <p>
              <span class="title is-5 has-text-black">
                {{ movie.real[0].firstName }} {{ movie.real[0].lastName }}
              </span>
              <span class="subtitle is-6 has-text-black">
                ({{ movie.real[0].birthday }}, {{ movie.real[0].nationality }})
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'movie',
  computed: {
    movie() {
      return this.movies.find(m => m.id == this.$route.params.id) || {}
    },
    ...mapGetters(['movies']),
  },
}
</script>
