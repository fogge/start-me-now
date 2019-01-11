import './Profile.scss'

@inject('loginStore') @observer export default class Profile extends Component {
  async start() {

  }

  @observable showSetting = 'Profile';

  componentDidMount() {
    this.showSetting = this.props.showSetting
    console.log(this.props.showSetting);
  }

  profileSettings = () => {
    this.showSetting = 'Profile';
  }

  widgetSettings = () => {
    this.showSetting = 'Widgets';
  }
}