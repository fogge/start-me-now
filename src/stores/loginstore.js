class LoginStore {
  @observable isLoggedIn = false;

  
  @observable errors = {};

}

export const loginStore = new LoginStore();