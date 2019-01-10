import './Profile.scss'

@inject('loginStore') @observer export default class Profile extends Component {
  async start() {

  }

  @observable showSetting = 'Profile';

  profileSettings = () => {
    this.showSetting = 'Profile';
  }

  widgetSettings = () => {
    this.showSetting = 'Widgets';
  }
}