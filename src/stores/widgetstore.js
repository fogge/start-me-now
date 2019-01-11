import { loginStore } from "./loginstore";

class WidgetStore {
  @observable widgetsWasFetched = false;

  @observable spotifyLink = "";
  @observable newsLink = "";
  @observable facebookLink = "";
  @observable twitterName = "";
  @observable calenderLinks = [];
  @observable backgroundLink = "";

  getCurrentWidgets = () => {
    if (loginStore.isLoggedIn) {
      fetch("/api/getwidgets")
        .then(res => res.json())
        .then(widgets => {
          this.spotifyLink = widgets.spotify;
          this.newsLink = widgets.news;
          this.facebookLink = widgets.facebook;
          this.twitterName = widgets.twitter;
          this.calenderLinks = [...widgets.calender];
          this.backgroundLink = widgets.background;

          this.widgetsWasFetched = true;
          console.log(this.backgroundLink)
          document.body.style.backgroundImage = `url('${this.backgroundLink}')`;
        });
    }
  };

}

export const widgetStore = new WidgetStore();
