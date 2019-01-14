import './Widget.scss'

@inject('widgetStore') @observer export default class Widget extends Component {
  async start() {

  }
  // Waiting until widget has loaded to fill them
  componentDidMount() {
  }

  compareWidget = (widget) => {
    console.log(widget);
    if (widget === 'news') {
      return <NewsWidget />
    } else if ( widget === 'spotify' ){
      return <SpotifyWidget />
    } else if ( widget === 'facebook' ){
      return <FacebookWidget />
    } else if ( widget === 'twitter' ){
      return <TwitterWidget />
    } else if ( widget === 'calender' ){
      return <CalenderWidget />
    } else if ( widget === 'quicknotes' ){
      return <QuickNoteWidget />
    }
  }

}