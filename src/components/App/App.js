import './App.scss';
import { loginStore } from '../../stores/loginstore';


@withRouter @inject('loginStore') @observer export default class App extends Component {
 
  componentDidMount() {
    this.props.loginStore.checkIfLoggedIn();
  }

}