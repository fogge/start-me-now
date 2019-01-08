import "./Register.scss";

@observer
export default class Register extends Component {
  async start() {}

  @observable email = "";
  @observable password = "";
  @observable passwordCheck = "";

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
    if (this.password === this.passwordCheck) {
      fetch("/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then(res => res.json())
      .then(res => {
        // Redirect here instead

        this.email = "";
        this.password = "";
        this.passwordCheck = "";

        console.log(res.message);
      });
    } else {
      // Errorhandling here
      console.log("pw doesnt match");
    }
  };

}
