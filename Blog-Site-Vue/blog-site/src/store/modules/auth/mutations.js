export const mutations = {
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
  }
}
