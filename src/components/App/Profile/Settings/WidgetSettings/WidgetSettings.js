import './WidgetSettings.scss'

@inject('widgetStore') @observer export default class WidgetSettings extends Component {
  async start() {
  }


  componentDidMount(){
    this.getCurrentWidgets();
    this.startDragAndDrop();
  }

  @observable saved = false;
  @observable error = false;

  @observable spotify = false;
  @observable news = false;
  @observable facebook = false;
  @observable twitter = false;
  @observable calender = false;
  @observable background = false;
  @observable widgetsorder = false;


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
        this.spotifyInput = widgets.spotify.content;
        this.newsInput = widgets.news.content;
        this.facebookInput = widgets.facebook.content;
        this.twitterInput = widgets.twitter.content;
        this.calenderInput = [...widgets.calender.content];
        this.backgroundInput = widgets.background;
      });
  }

  saveWidgets = () => {
    if (this.positionsFilled()) {
      let positionData = this.getNewWidgetsPosition();
      // fix inputs
      let calendersToSave = ' ' + toJS(this.calenderInput)
      calendersToSave = calendersToSave.replace(/\s/g, "").split(',');
      let spotifyLink = this.cutSpotifyLink(this.spotifyInput);
  
      const data = {
        spotify: {
          content: spotifyLink,
          position: positionData['spotify'] * 1
        },
        news: {
          content: this.newsInput,
          position: positionData['news'] * 1
        },
        facebook: {
          content: this.facebookInput,
          position: positionData['facebook'] * 1
        },
        twitter: {
          content: this.twitterInput,
          position: positionData['twitter'] * 1
        },
        calender: {
          content: calendersToSave,
          position: positionData['calender'] * 1
        },
        quicknotes: {
          position: positionData['quicknotes'] * 1
        },
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
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }

    
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

  // Drag and drop


  positionsFilled = () => {
    return document.getElementById('widget-rest-container').childNodes.length === 0
  }
 
  @observable myWidgets = []

  startDragAndDrop = () => {

    this.myWidgets = this.props.widgetStore.widgetPosition.map((x,i) => {
      return (    
        <div key={x + i} id={i} className="widget-holder-preview d-flex flex-even flex-column justify-content-center" onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)}>
          <div id={x} className="d-flex justify-content-center h-100 align-items-center px-2 drag-item" draggable="true" onDragStart={e => this.drag(e)} >{x}</div>
        </div>
      )} 
    )
  }



  getNewWidgetsPosition = () => {
    let data = {}
    for (let i = 0; i < 6; i++){
      let holder = document.getElementById(i);
      data[holder.firstChild.id] = holder.id;
    }
    return data;
  }

  allowDrop = (e) => {
    e.preventDefault();
  }
  
  drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  }

  drop = (e) => {
    if(e.target.childNodes.length === 0 || e.target.id === 'widget-rest-container') {
      e.preventDefault();
      let data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
    } else {
      let data = e.dataTransfer.getData("text");
      let targetedOnDrop = e.target;
      if(targetedOnDrop.classList.contains("widget-holder-preview")){
        document.getElementById('widget-rest-container').appendChild(e.target.childNodes[0])
        e.target.appendChild(document.getElementById(data));
      } else {
        targetedOnDrop.closest('.widget-holder-preview').appendChild(document.getElementById(data));
        document.getElementById('widget-rest-container').appendChild(targetedOnDrop)
      }
    }
  }

}