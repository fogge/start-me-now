import './WidgetSettings.scss'

@inject('loginStore') @observer export default class WidgetSettings extends Component {
  async start() {

  }

  @observable spotify = false;
  @observable news = false;
  @observable facebook = false;
  @observable twitter = false;
  @observable calender = false;



  resetAll(){
    this.spotify = false;
    this.news = false;
    this.facebook = false;
    this.twitter = false;
    this.calender = false;

  }

  toggleCollapse(name) {
    console.log('hej')
    console.log(name, this[name])
    this[name] = !this[name];
    let currentState = this[name];
    this.resetAll();
    this[name] = currentState;
  }

  lala = () => {
    console.log('hej')
  }

}