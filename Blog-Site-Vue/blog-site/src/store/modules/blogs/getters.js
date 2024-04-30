export const getters = {
  blogs(state) {
    return state.blogs
  },
  hasBlogs(state) {
    return state.blogs && state.blogs.length > 0
  }
}
