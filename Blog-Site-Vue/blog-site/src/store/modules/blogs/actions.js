let URL = 'https://my-blog-f4ed4-default-rtdb.europe-west1.firebasedatabase.app/blogs'

export const actions = {
  // Action function to add a new blog
  async addBlog(context, payload) {
    const userId = context.rootGetters.userId

    // Constructing blog data object
    const blogData = {
      title: payload.title,
      description: payload.description,
      createdAt: payload.createdAt
    }

    const token = context.rootGetters.token
    try {
      // Sending a POST request to add a new blog
      const response = await fetch(
        `${URL}.json?auth=${token}`,
        { method: 'POST', body: JSON.stringify(blogData) }
      )
      const responseData = await response.json()

      // If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to Add Blog!!!')
      }

      // Committing the added blog to the store
      context.commit('addBlog', { ...blogData, id: userId })
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  // Action function to fetch all blogs
  async getBlogs(context) {
    try {
      // Sending a GET request to fetch all blogs
      const response = await fetch(
        `${URL}.json`
      )
      const responseData = await response.json()

      // If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to fetch!!!')
      }

      // Converting the responseData object into an array of key-value pairs
      // Each key-value pair represents a blog entry (key: blog ID, value: blog data)
      const blogEntries = Object.entries(responseData);


      const blogs = blogEntries.map(([key, value]) => ({
        // Extract the blog ID from the key
        id: key,
        // Extract the title, description, and createdAt properties from the blog data
        title: value.title,
        description: value.description,
        createdAt: value.createdAt
      }));
      context.commit('setBlogs', blogs)
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  // Action function to update an existing blog
  async updateBlog(context, payload) {
    const token = context.rootGetters.token
    const { id, newData } = payload
    try {
      // Sending a PUT request to update the blog
      const response = await fetch(
        `${URL}/${id}.json?auth=${token}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
        }
      )
      const responseData = await response.json()

      // If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to update!!!')
      }

      // Committing the updated blog to the store
      context.commit('updateBlog', {
        id,
        newData
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  // Action function to delete a blog
  async deleteBlog(context, payload) {
    const token = context.rootGetters.token
    const { blogId } = payload
    try {
      // Sending a DELETE request to delete the blog
      const response = await fetch(
        `${URL}/${blogId}.json?auth=${token}`,
        {
          method: 'DELETE'
        }
      )
      const responseData = await response.json()

      // If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to delete!!!')
      }

      // Committing the deleted blog to the store
      context.commit('deleteBlog', payload)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}