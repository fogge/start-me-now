class LoginStore {
  @observable isLoggedIn = false;
  @observable user = null;

  
  @observable errors = {};


  checkIfLoggedIn() {
    fetch('/api/login', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.isLoggedIn) {
          this.isLoggedIn = true
          this.user = res.user
        }
      })
  }
  

}

export const loginStore = new LoginStore();