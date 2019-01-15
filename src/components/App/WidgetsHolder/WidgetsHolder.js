@inject('widgetStore') @observer export default class WidgetsHolder extends Component {
  async start() {
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