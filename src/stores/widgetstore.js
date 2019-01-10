import { loginStore } from "./loginstore";

class WidgetStore {
  @observable widgetsDidLoad = false;
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


  listenToDomElement = () => {
    let widgets = document.getElementsByClassName("widget");
    setTimeout(() => {
      if (widgets && widgets[0].offsetWidth < 500) {
        this.widgetsDidLoad = true;
      } else {
        this.listenToDomElement();
      }
      console.log('widgets did load..', this.widgetsDidLoad);

    }, 50);
  };
}

export const widgetStore = new WidgetStore();
