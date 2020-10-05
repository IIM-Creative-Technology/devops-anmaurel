import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import Api from './../services/api'

export default new Vuex.Store({
  state: {
    movies: [
      {
        id: '1',
        title: 'La Soupe aux choux',
        img: './soupe_aux_choux.jpg',
        desc:
          'Le Glaude et le Bombé, deux vieux paysans portés sur la bouteille, vivent très retirés de la vie moderne. Une nuit, un extra-terrestre atterrit en soucoupe volante dans le jardin du Glaude. En gage de bienvenue, ce dernier lui offre un peu de sa fameuse soupe aux choux.',
        year: '1981',
        lang: 'Français',
        real: [
          {
            firstName: 'Jean',
            lastName: 'Girault',
            nationality: 'Français',
            birthday: '1924-05-09',
          },
        ],
        gender: 'Comédie/SF',
        rate: '',
      },
      {
        id: '2',
        title: 'Le Dîner de cons',
        img: './diner_de_cons.jpg',
        desc:
          'Pierre, éditeur, participe chaque mercredi à un `dîner de cons`. Le principe : chacun amène un `con` et celui qui a déniché le plus spectaculaire est déclaré vainqueur. Ce soir, son invité est François Pignon. Passionné de modèles réduits en allumettes, ce dernier est également un véritable porteur de guigne.',
        year: '1998',
        lang: 'Français',
        real: [
          {
            firstName: 'Francis',
            lastName: 'Veber',
            nationality: 'Français',
            birthday: '1937-07-28',
          },
        ],
        gender: 'Comédie',
        rate: '',
      },
      {
        id: '3',
        title: 'La Grande Vadrouille',
        img: './grande_vadrouille.jpg',
        desc:
          'En 1942, un avion anglais est abattu par les Allemands au-dessus de Paris. Les trois pilotes sautent en parachute et atterrissent dans différents endroits de la capitale. Ils sont aidés par deux civils français, un chef d`orchestre et un peintre en bâtiment qui acceptent de les mener en zone libre ; ils deviennent ainsi, malgré eux, acteurs de la Résistance.',
        year: '1966',
        lang: 'Français',
        real: [
          {
            firstName: 'Gérard',
            lastName: 'Oury',
            nationality: 'Français',
            birthday: '1919-04-29',
          },
        ],
        gender: 'Comédie/Film de guerre',
        rate: '',
      },
      {
        id: '4',
        title: 'L`Aile ou la Cuisse',
        img: './aile_ou_cuisse.jpg',
        desc:
          'Charles Duchemin, le terrible éditeur d`une revue gastronomique, voudrait que son fils, Gérard, lui succède, mais celui-ci préfère faire le clown dans un cirque. Charles lance un défi à Tricatel, le roi de la cuisine sous vide, en le conviant à une émission de télévision. Toutefois, Charles perd le goût et l`odorat. Aussi Gérard accepte-t-il de le remplacer.',
        year: '1976',
        lang: 'Français',
        real: [
          {
            firstName: 'Claude',
            lastName: 'Zidi',
            nationality: 'Français',
            birthday: '1934-07-25',
          },
        ],
        gender: 'Comédie/Satire',
        rate: '',
      },
    ],
  },
  mutations: {
    ADD_MOVIE: (state, payload) => {
      const newMovie = {
        id: payload.newId,
        title: payload.title,
        img: payload.img,
        desc: payload.desc,
        year: payload.year,
        lang: payload.lang,
        gender: payload.gender,
        real: [
          {
            firstName: payload.real[0].firstName,
            lastName: payload.real[0].lastName,
            nationality: payload.real[0].nationality,
            birthday: payload.real[0].birthday,
          },
        ],
        completed: false,
      }
      state.movies.unshift(newMovie)
    },
    REMOVE_MOVIE: (state, payload) => {
      state.movies.splice(state.movies.indexOf(payload), 1)
    },
    UPDATE_MOVIE: (state, payload) => {
      state.movies.find(movie => movie.id == payload.id)
    },
  },
  actions: {
    addMovie: (context, payload) => {
      context.commit('ADD_MOVIE', payload)
    },
    removeMovie: (context, payload) => {
      context.commit('REMOVE_MOVIE', payload)
    },
    updateMovie: (context, payload) => {
      context.commit('UPDATE_MOVIE', payload)
    },
  },
  getters: {
    movies: state => state.movies,
  },
})
