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

    // Get the position from array or something..
    fetch('api/savenotes', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quicknotes: {
        content: this.quickNotesInput,
        position: 5

      }}),
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