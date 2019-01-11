import './WidgetSettings.scss'

@inject('widgetStore') @observer export default class WidgetSettings extends Component {
  async start() {

  }

  componentDidMount(){
    this.getCurrentWidgets();
  }

  @observable saved = false;

  @observable spotify = false;
  @observable news = false;
  @observable facebook = false;
  @observable twitter = false;
  @observable calender = false;
  @observable background = false;

  toggleCollapse(name) {
    this[name] = !this[name];
  }

  @observable spotifyInput = '';
  @observable newsInput = '';
  @observable facebookInput = '';
  @observable twitterInput = '';
  @observable calenderInput = [];
  @observable backgroundInput = '';


  getSpotifyInput = e => {
    this.spotifyInput = e.currentTarget.value;
  };

  getNewsInput = e => {
    this.newsInput = e.currentTarget.value;
  };

  getFacebookInput = e => {
    this.facebookInput = e.currentTarget.value;
  };

  getTwitterInput = e => {
    this.twitterInput = e.currentTarget.value;
  };

  getCalenderInput = e => {
    this.calenderInput = e.currentTarget.value;
  };
  
  getBackgroundInput = e => {
    this.backgroundInput = e.currentTarget.value;
  };

  getCurrentWidgets = () => {
    fetch('api/getwidgets')
      .then(res => res.json())
      .then(widgets => {
        this.spotifyInput = widgets.spotify;
        this.newsInput = widgets.news;
        this.facebookInput = widgets.facebook;
        this.twitterInput = widgets.twitter;
        this.calenderInput = [...widgets.calender];
        this.backgroundInput = widgets.background;
      });
  }

  saveWidgets = () => {
    // fix inputs
    let calendersToSave = ' ' + toJS(this.calenderInput)
    calendersToSave = calendersToSave.replace(/\s/g, "").split(',');
    let spotifyLink = this.cutSpotifyLink(this.spotifyInput);
    const data = {
      spotify: spotifyLink,
      news: this.newsInput,
      facebook: this.facebookInput,
      twitter: this.twitterInput,
      calender: calendersToSave,
      background: this.backgroundInput
    }

    fetch('api/updatewidgets', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(widgets => {
        this.saved = true;
        this.props.widgetStore.getCurrentWidgets();
        this.getCurrentWidgets();

        setTimeout(() => {
          this.saved = false;
        }, 4000);

      });
  }

  cutSpotifyLink(link) {
    if(link.includes("/embed/") || !link) {
      return link;
    }

    let pos = link.indexOf('/user/')
    let newLink = [link.slice(0, pos), '/embed', link.slice(pos)].join('');
    let pos2 = newLink.indexOf('?si=')
    return newLink.slice(0, pos2)
  }

}