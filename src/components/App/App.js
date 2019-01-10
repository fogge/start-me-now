import './App.scss';
import { loginStore } from '../../stores/loginstore';
import { widgetStore } from '../../stores/widgetstore';



@withRouter @inject('loginStore', 'widgetStore') @observer export default class App extends Component {
 
  componentWillMount() {
    this.props.loginStore.checkIfLoggedIn();
  }

}