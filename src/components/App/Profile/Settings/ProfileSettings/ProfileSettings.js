import './ProfileSettings.scss'

@inject('widgetStore') @observer export default class ProfileSettings extends Component {
  async start() {

  }

  componentDidMount(){
    this.getCurrentProfileSettings();
    console.log('hello from profilesettings')
  }

  @observable saved = false;

  
  @observable nameInput = '';
  @observable emailInput = '';
  @observable newPasswordInput = '';
  @observable newPasswordCheckInput = '';
  @observable oldPasswordInput = '';

  getNameInput = e => {
    this.nameInput = e.currentTarget.value;
  };

  getEmailInput = e => {
    this.emailInput = e.currentTarget.value;
  };

  getnewPasswordInput = e => {
    this.newPasswordInput = e.currentTarget.value;
  };

  getnewPasswordCheckInput = e => {
    this.newPasswordCheckInput = e.currentTarget.value;
  };

  getOldPasswordInput = e => {
    this.oldPasswordInput = e.currentTarget.value;
  };


  saveProfile = () => {
    console.log('saved profile')
    // fix inputs
    if(this.newPasswordInput === this.newPasswordCheckInput) {
      const data = {
        email: this.emailInput,
        oldPassword: this.oldPasswordInput,
        newPassword: this.newPasswordInput,
        name: this.nameInput
      }

      fetch('api/updateprofile', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })
        .then(res => res.json())
        .then(res => {
          this.saved = true;
          this.getCurrentProfileSettings();
          
          this.newPasswordInput = '';
          this.newPasswordCheckInput = '';
          this.oldPasswordInput = '';


          setTimeout(() => {
            this.saved = false;
          }, 4000);
  
        });
    } else {
      // Two new passwords doenst match
    }


  }

  getCurrentProfileSettings = () => {
    fetch('/api/getprofile')
      .then(res => res.json())
      .then(profileSettings => {
        this.nameInput = profileSettings.name;
        this.emailInput = profileSettings.email;

      });
  }

}