export const getters = {
  userId(state) {
    return state.userId
  },
  token(state) {
    return state.token
  },
  isAuth(state) {
    // Convert the state token to a boolean value
    // Using double negation (!!) to ensure it's interpreted as true or false
    // If state.token exists (truthy), return true; otherwise, return false
    return !!state.token
  }
}
