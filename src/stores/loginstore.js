class LoginStore {
  @observable isLoggedIn = false;

  
  @observable errors = {};


  @action register(data) {
    this.errors = {};
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 400) {
          this.errors.registerError = 'That user already exists';
          setTimeout(() => this.errors = {}, 3000);
          throw new Error('User exists');
        } else return res.json();
      })
      .then(res => {
        document.location.reload();
      })
      .catch(err => err)
  }


}

export const loginStore = new LoginStore();