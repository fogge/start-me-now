import { loginStore } from "./loginstore";

class WidgetStore {
  @observable widgetsWasFetched = false;

  @observable spotifyLink = "";
  @observable newsLink = "";
  @observable facebookLink = "";
  @observable twitterName = "";
  @observable calenderLinks = [];
  @observable backgroundLink = "";

  @observable allWidgets = {};
  @observable widgetPosition = [];

  getCurrentWidgets = () => {
    if (loginStore.isLoggedIn) {
      fetch("/api/getwidgets")
        .then(res => res.json())
        .then(widgets => {
          console.log(widgets);
          this.spotifyLink = widgets.spotify.content;
          this.newsLink = widgets.news.content;
          this.facebookLink = widgets.facebook.content;
          this.twitterName = widgets.twitter.content;
          this.calenderLinks = [...widgets.calender.content];
          this.backgroundLink = widgets.background;

          this.allWidgets = widgets;

          this.getPositions();
          document.body.style.backgroundImage = `url('${this.backgroundLink}')`;
        });
    }
  };

  getPositions = () => {
    let tempArr = [];

    // Make an array from objects
    for (let key in this.allWidgets) {
      if (this.allWidgets[key].position >= 0) {
        tempArr.push({name : key, position : this.allWidgets[key].position});

      }
    }

    for (let i = 0; i < tempArr.length; i++){
       tempArr.map((x) => {
        if (i === x.position) {
          this.widgetPosition.push(x.name)
          return null;
        }
      })
    }
    console.log(toJS(this.widgetPosition));
    this.widgetsWasFetched = true;
  }

}

export const widgetStore = new WidgetStore();
