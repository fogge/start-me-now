import "./Register.scss";
import { loginStore } from "../../../../stores/loginstore";

@withRouter
@inject("loginStore")
@observer
export default class Register extends Component {
  async start() {}

  @observable email = "";
  @observable password = "";
  @observable passwordCheck = "";
  @observable error = "";
  @observable success = "";
  @observable disabledBtn = false;

  getEmail = e => {
    this.email = e.currentTarget.value;
  };

  getPassword = e => {
    this.password = e.currentTarget.value;
  };

  getPasswordCheck = e => {
    this.passwordCheck = e.currentTarget.value;
  };

  submitRegistration = () => {
    this.disabledBtn = true;

    if (this.validateInput()) {
      fetch("/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          pwCheck: this.passwordCheck
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          // Redirect here instead
          if (res.success) {
            this.success = res.message + '! Logging you in...';
            setTimeout(() => {
              this.redirectLogin();
            }, 5000);
          } else {
            this.error = res.message;
            this.clearError();
          }
        });
    }
  };

  validateInput = () => {
    if (!(this.email.length > 0)) {
      this.error = "No input in email field.";
      this.clearError();
      return false;
    } else if (this.password.length < 6 || this.passwordCheck.length < 6) {
      this.error = "Password must be atleast 6 characters long.";
      this.clearError();
      return false;
    } else {
      return true;
    }
  };

  clearError = () => {
    setTimeout(() => {
      this.error = "";
      this.disabledBtn = false;
    }, 5000);
  };

  redirectLogin = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    }).then(res => res.json()).then(res => {
      this.email = "";
      this.password = "";
      this.passwordCheck = "";

      this.props.loginStore.checkIfLoggedIn()
      document.location.href = '/';

      this.success = "";
      this.disabledBtn = false;

    });
  };
}
