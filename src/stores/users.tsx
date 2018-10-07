import { observable, action, computed } from "mobx"
import auth from '../services/auth'

class Users {
  @observable user
  @observable isFetching
  @observable token

  initialState = {
    id: undefined,
    username: undefined,
    name: undefined,
    email: undefined,
    token: undefined
  }

  constructor() {
    this.user = this.initialState
    this.isFetching = false
  }

  @computed
  get isLoggedIn() {
    return auth.isAuthenticated() && !auth.isExpiredToken(auth.getToken());
  }

  @action
  setUser = user => {
    this.user = user
    this.isFetching = false
  }
  
  @action
  logingin = () => {
    this.isFetching = true
  }

  @action
  resetUser = () => {
    this.user = this.initialState
  }
}

const users = new Users()
export default users
