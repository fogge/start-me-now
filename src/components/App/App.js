import './App.scss';
import { loginStore } from '../../stores/loginstore';
import { widgetStore } from '../../stores/widgetstore';


@withRouter @inject('loginStore', 'widgetStore') @observer export default class App extends Component {
 
  componentWillMount() {
    this.props.widgetStore.getCurrentWidgets();
    this.props.loginStore.checkIfLoggedIn();
    console.log(this.props.loginStore.isLoggedIn)
  }

}