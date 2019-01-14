@inject('widgetStore') @observer export default class WidgetsHolder extends Component {
  async start() {
    console.log(toJS(this.props.widgetStore.widgetPosition))
    this.widgetsArray = [
      'NewsWidget',
      'TwitterWidget',
      'FacebookWidget',
      'SpotifyWidget',
      'CalenderWidget',
      'QuickNoteWidget'
      ]
  }

}