import './App.scss';
import { loginStore } from '../../stores/loginstore';


@withRouter @inject('loginStore') @observer export default class App extends Component {
 
  componentWillMount() {
    this.props.loginStore.checkIfLoggedIn();
    console.log(this.props.loginStore.isLoggedIn)
  }

}