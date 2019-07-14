import * as fb from "firebase"

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: null

  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }

  },
  actions: {
    async loginUser({
      commit
    }, {
      email,
      password
    }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', user)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }


    },

    autologinUser({
      commit
    }, payload) {
      commit('setUser', new User(payload.uid))
    },
    logout({
      commit
    }) {
      fb.auth().signOut();
      commit('setUser', null)


    }


  },
  getters: {
    user(state) {
      return state.user
    },
    isUserLogedIn(state) {
      return state.user !== null

    }
  }


}