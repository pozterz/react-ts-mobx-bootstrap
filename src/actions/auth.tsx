import userStore from '../stores/users'
import fetch from '../services/fetch'

export const login = ({ username, password }, callback = undefined) => {
  
	const method = 'POST'
	const path = 'login'

	userStore.logingin()
	
  return fetch(method, path, { username, password }, {})
		// .then(data => {
    //   setTimeout(() => {
    //     userStore.setUser({
    //       name: 'POZTERZ',
    //       token: 'abc'
    //     })
    //   }, 4000)
    // })
    // .catch(err => {
    //   // handling error
    // })
}

export const logout = () => {
  userStore.resetUser()
}

export const setUser = (user) => {
  userStore.setUser(user)
}