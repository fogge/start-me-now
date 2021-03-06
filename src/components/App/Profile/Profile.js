import './Profile.scss'

@inject('loginStore') @inject('widgetStore') @observer export default class Profile extends Component {
  async start() {

  }

  @observable showSetting = 'Profile';

  componentDidMount() {
    this.showSetting = this.props.showSetting
  }

  profileSettings = () => {
    this.showSetting = 'Profile';
  }

  widgetSettings = () => {
    this.showSetting = 'Widgets';
  }
}