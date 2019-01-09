import './WidgetSettings.scss'

@inject('loginStore') @observer export default class WidgetSettings extends Component {
  async start() {

  }

  @observable spotify = false;
  @observable news = false;
  @observable facebook = false;
  @observable twitter = false;
  @observable calender = false;

  toggleCollapse(name) {
    this[name] = !this[name];
  }

}