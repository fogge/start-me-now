import './WidgetSettings.scss'

@inject('loginStore') @observer export default class WidgetSettings extends Component {
  async start() {

  }

  componentDidMount(){
    this.getCurrentWidgets();
  }

  @observable spotify = false;
  @observable news = false;
  @observable facebook = false;
  @observable twitter = false;
  @observable calender = false;

  toggleCollapse(name) {
    this[name] = !this[name];
  }

  @observable spotifyInput = '';
  @observable newsInput = '';
  @observable facebookInput = '';
  @observable twitterInput = '';
  @observable calenderInput = [];


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

  getCurrentWidgets = () => {
    console.log('hello')
    fetch('api/getwidgets')
      .then(res => res.json())
      .then(widgets => {
        console.log(widgets);
        this.spotifyInput = widgets.spotify;
        this.newsInput = widgets.news;
        this.facebookInput = widgets.facebook;
        this.twitterInput = widgets.twitter;
        this.calenderInput = [...widgets.calender];

      });
  }

  saveWidgets = () => {
    let calendersToSave = ' ' + toJS(this.calenderInput)
    calendersToSave = calendersToSave.replace(/\s/g, "").split(',');

    console.log(calendersToSave);

    const data = {
      spotify: this.spotifyInput,
      news: this.newsInput,
      facebook: this.facebookInput,
      twitter: this.twitterInput,
      calender: calendersToSave
    }


    console.log('hello')
    fetch('api/updatewidgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(widgets => {
        console.log(widgets);
      });
  }






}