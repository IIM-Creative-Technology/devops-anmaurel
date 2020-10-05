<template>
  <div class="columns">
    <div class="column is-6 is-offset-3 has-text-left">
      <form class="box">
        <b-field label="Title">
          <b-input v-model="title"></b-input>
        </b-field>
        <b-field label="Image">
          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                @change="previewImage"
                accept="image/*"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>
        </b-field>
        <div v-if="img.length > 0">
          <img class="preview" :src="img" />
        </div>
        <b-field label="Description">
          <b-input v-model="desc" maxlength="400" type="textarea"></b-input>
        </b-field>
        <b-field label="Year">
          <b-input v-model="year" min="1895" max="2020" type="number"></b-input>
        </b-field>
        <b-field label="Lang">
          <b-input v-model="lang"></b-input>
        </b-field>
        <b-field label="Gender">
          <b-input v-model="gender"></b-input>
        </b-field>
        <b-field label="Real first name">
          <b-input v-model="real[0].firstName"></b-input>
        </b-field>
        <b-field label="Real last name">
          <b-input v-model="real[0].lastName"></b-input>
        </b-field>
        <b-field label="Real nationality">
          <b-input v-model="real[0].nationality"></b-input>
        </b-field>
        <b-field label="Real birthday">
          <input v-model="real[0].birthday" type="date" />
          <!-- <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            v-model="birthday"
          >
          </b-datepicker> -->
        </b-field>
        <div class="has-text-centered">
          <b-button
            class="btn"
            size="is-small"
            type="is-primary"
            icon-left="plus"
            @click.prevent="addMovie"
            >CREATE</b-button
          >
          <router-link to="/">
            <b-button
              class="btn"
              size="is-small"
              type="is-primary"
              icon-left="cancel"
              >CANCEL</b-button
            ></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'createMovie',
  data() {
    return {
      title: '',
      img: '',
      desc: '',
      year: '',
      lang: '',
      gender: '',
      real: [
        {
          firstName: '',
          lastName: '',
          nationality: '',
          birthday: '',
        },
      ],
      newId: '5',
    }
  },
  methods: {
    addMovie: function() {
      this.$store.dispatch('addMovie', this)
      this.newId++
      this.title = ''
      this.img = ''
      this.desc = ''
      this.year = ''
      this.lang = ''
      this.gender = ''
      this.real[0].firstName = ''
      this.real[0].lastName = ''
      this.real[0].nationality = ''
      this.real[0].birthday = ''
      this.$buefy.toast.open('Nouveaux film créé !')
    },
    previewImage: function(event) {
      const input = event.target

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = e => {
          this.img = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
  },
}
</script>

<style lang="scss">
img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
}
</style>
