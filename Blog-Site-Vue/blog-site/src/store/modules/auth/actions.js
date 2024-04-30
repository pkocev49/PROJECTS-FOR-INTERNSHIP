let URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
let apiKey = 'AIzaSyC23kA_UfknDJ3e_CEE7nYvdPMfphFsS-A'

export const actions = {
  // Function to log in a user
  async login(context, payload) {
    try {
      // Sending a POST request to the authentication API with user credentials
      const response = await fetch(
        `${URL}${apiKey}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        }
      )

      // Parsing the response data
      const responseData = await response.json()

      // If the response is not successful, throw an error
      if (!response.ok) {
        console.log(responseData)
        const error = new Error(responseData.message || 'Wrong email or password!!!')
        throw error
      }

      // Storing the user token and ID in local storage
      localStorage.setItem('token', responseData.idToken)
      localStorage.setItem('userId', responseData.localId)

      // Committing user data to Vuex store
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId
      })
    } catch (error) {
      // Handling authentication errors
      console.error('Authentication failed:', error)
      throw error
    }
  },

  // Function to check if the user is logged in
  checkLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    // If token and userId exist in local storage, commit user data to Vuex store
    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      })
    }
  },

  // Function to log out a user
  logout(context) {
    // Removing token and userId from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('userId')

    // Clearing user data from Vuex store
    context.commit('setUser', {
      token: null,
      userId: null
    })
  }
}