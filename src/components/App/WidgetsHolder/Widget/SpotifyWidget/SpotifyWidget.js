@inject('widgetStore') @observer export default class SpotifyWidget extends Component {
  async start() {
    console.log(this.props.widgetStore.widgetsDidLoad)
  }
  

}