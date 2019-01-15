import './Login.scss';
import { loginStore } from '../../../../stores/loginstore';

@withRouter @inject('loginStore') @observer export default class Login extends Component {
 
  async start(){

  }

  @observable email = '';
  @observable password = '';
  @observable error = '';
  getEmail = e => {
    this.email = e.currentTarget.value;
  };

  getPassword = e => {
    this.password = e.currentTarget.value;
  };

  submitLogin = () => {
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
        // Redirect here instead

        if(res.loggedIn){
          this.email = "";
          this.password = "";
          this.props.loginStore.checkIfLoggedIn()
          document.location.href = '/';
        } else {
          this.error = res.message;
        }

        console.log(res)


      });
    };



}