import './App.scss';
import { loginStore } from '../../stores/loginstore';


@withRouter @inject('loginStore') @observer export default class App extends Component {
 
  async start(){
    console.log(loginStore.isLoggedIn)
  }

}