import axios              from 'axios'

const state = () => ({
  post: {}
})

const getters = {
  allPost (state) {
    return state.post
  }
}

const actions = {
  async getAllPost ({ commit }) {
    try {
      if (state().post.length > 0) {
        return state.post
      }
      let res = await axios.get(`/api/post`)
      res.data.data.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime() }).reverse()
      commit('GET_ALL_POST', res.data.data)
      return res.data.data
    } catch (err) {
      throw new Error(err)
    }
  },

  async getPostByID ({ commit }, pid) {
    try {
      let res = await axios.get(`/api/post/${pid}`)
      return res.data.data
    } catch (err) {
      throw new Error(err)
    }
  }
}

const mutations = {
  GET_ALL_POST (state, data) {
    state.post = data
  }
}

export default { state, getters, actions, mutations }