import { mutations } from './mutations'
import { actions } from './actions.js'
import { getters } from './getters'

export default {
  state() {
    return {
      blogId: null,
      token: null
    }
  },
  mutations,
  actions,
  getters
}
