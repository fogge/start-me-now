import { loginStore } from "./loginstore";

class WidgetStore {
  @observable widgetsWasFetched = false;

  @observable spotifyLink = "";
  @observable newsLink = "";
  @observable facebookLink = "";
  @observable twitterName = "";
  @observable calenderLinks = [];

  getCurrentWidgets = () => {
    if (loginStore.isLoggedIn) {
      fetch("api/getwidgets")
        .then(res => res.json())
        .then(widgets => {
          this.spotifyLink = widgets.spotify;
          this.newsLink = widgets.news;
          this.facebookLink = widgets.facebook;
          this.twitterName = widgets.twitter;
          this.calenderLinks = [...widgets.calender];

          this.widgetsWasFetched = true;
        });
    }
  };

}

export const widgetStore = new WidgetStore();
