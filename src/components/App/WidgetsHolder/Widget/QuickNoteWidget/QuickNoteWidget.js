import './QuickNoteWidget.scss'

@inject('widgetStore') @inject('loginStore') @observer export default class QuickNoteWidget extends Component {
  async start() {

  }

  componentDidMount(){
    this.getQuickNotes();
  }
  @observable saved = false;
  @observable quickNotesInput = '';


  getQuickNotesInput = e => {
    this.quickNotesInput = e.currentTarget.value;
  };

  saveQuickNotes = () => {
    let position = this.props.widgetStore.widgetPosition.indexOf('quicknotes');

    let quicknotes = {
      content: this.quickNotesInput,
      position: position
    }
    console.log(quicknotes);
    fetch('api/savenotes', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quicknotes),
      credentials: 'include'
    })
      .then(res => res.json()).then((res) => {
        this.saved = true;

        setTimeout(() => {
          this.saved = false;
        }, 4000);
      })   
  }

  getQuickNotes = () => {
    if (this.props.loginStore.isLoggedIn) {
      fetch("api/getwidgets")
        .then(res => res.json())
        .then(widgets => {
          console.log(widgets);

          this.quickNotesInput = widgets.quicknotes.content;
        });
    }
  };

}