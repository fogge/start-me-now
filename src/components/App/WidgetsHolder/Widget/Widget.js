import './Widget.scss'

@inject('widgetStore') @observer export default class Widget extends Component {
  async start() {

  }
  // Waiting until widget has loaded to fill them
  componentDidMount() {
    this.props.widgetStore.listenToDomElement();
  }

}