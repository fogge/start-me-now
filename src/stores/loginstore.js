import { widgetStore } from "./widgetstore";

class LoginStore {
  @observable isLoggedIn = false;
  @observable user = null;
  @observable loading = true;

  
  @observable errors = {};


  checkIfLoggedIn() {
    fetch('/api/isloggedin', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.isLoggedIn) {
          this.isLoggedIn = true;
          this.user = res.user;
        }
        this.loading = false;
        widgetStore.getCurrentWidgets();
      })
  }

  logout = () => {
    document.location.href = '/api/logout';
  }
  

}

export const loginStore = new LoginStore();