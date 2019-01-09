class WidgetStore {
  @observable spotifyLink = '';
  @observable newsLink = '';
  @observable facebookLink = '';
  @observable twitterName = '';
  @observable calenderLinks = [];
  
  getCurrentWidgets = () => {
    fetch('api/getwidgets')
      .then(res => res.json())
      .then(widgets => {
        this.spotifyLink = widgets.spotify;
        this.newsLink = widgets.news;
        this.facebookLink = widgets.facebook;
        this.twitterName = widgets.twitter;
        this.calenderLinks = [...widgets.calender];
        console.log(widgets);
      });
  }

}

export const widgetStore = new WidgetStore();