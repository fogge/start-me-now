import './Widget.scss'

@inject('widgetStore') @observer export default class Widget extends Component {
  async start() {

  }
  // Waiting until widget has loaded to fill them
  componentDidMount() {
  }

  compareWidget = (widget) => {
    if (widget === 'news') {
      if(this.props.widgetStore.newsLink.length > 0) {
        return <NewsWidget />
      } else {
        return <WidgetPlaceholder />
      }
    } else if ( widget === 'spotify' ){
      if(this.props.widgetStore.spotifyLink.length > 0) {
        return <SpotifyWidget />
      } else {
        return <WidgetPlaceholder />
      }
    } else if ( widget === 'facebook' ){
      if(this.props.widgetStore.facebookLink.length > 0) {
        return <FacebookWidget />
      } else {
        return <WidgetPlaceholder />
      }
    } else if ( widget === 'twitter' ){
      if(this.props.widgetStore.twitterName.length > 0) {
        return <TwitterWidget />
      } else {
        return <WidgetPlaceholder />
      }
    } else if ( widget === 'calender' ){
      if(this.props.widgetStore.calenderLinks[0].length > 0) {
        return <CalenderWidget />
      } else {
        return <WidgetPlaceholder />
      }
    } else if ( widget === 'quicknotes' ){
      return <QuickNoteWidget />
    }
  }

}