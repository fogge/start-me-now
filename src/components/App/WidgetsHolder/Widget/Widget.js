import './Widget.scss'

@observer export default class Widget extends Component {
  async start() {
  }

  @observable loaded = false;

  // Waiting until widget has loaded to fill them
  componentDidMount() {
    let listenToDomElement = () => {
      let widgets = document.getElementsByClassName('widget');
      setTimeout(() => {
        if(widgets && widgets[0].offsetWidth < 500) {
          this.loaded = true;
        } else {
          listenToDomElement();
        }
      }, 50);
    }
    listenToDomElement();
  }

}