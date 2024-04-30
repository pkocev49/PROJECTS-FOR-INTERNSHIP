export const mutations = {
  // Mutation to add a new blog to the state
  addBlog(state, payload) {
    state.blogs.push(payload)
  },

  // Mutation to set the entire list of blogs in the state
  setBlogs(state, payload) {
    state.blogs = payload
  },

  // Mutation to update an existing blog in the state
  updateBlog(state, payload) {
    const { id, newData } = payload
    // Find the index of the blog to be updated
    let blogIndex = state.blogs.findIndex((blog) => blog.id === id)
    // If the blog exists in the state, update its data with newData
    if (blogIndex !== -1) {
      state.blogs[blogIndex] = { ...state.blogs[blogIndex], ...newData }
    }
  },

  // Mutation to delete a blog from the state
  deleteBlog(state, payload) {
    // Filter out the blog with the specified ID from the state
    state.blogs = state.blogs.filter((blog) => blog.id !== payload)
  }
}