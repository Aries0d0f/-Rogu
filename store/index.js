import Vuex               from 'vuex'

import post               from './post'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      post
    }
  })
}

export default createStore