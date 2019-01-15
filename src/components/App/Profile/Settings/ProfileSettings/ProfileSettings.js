import './ProfileSettings.scss'

@inject('widgetStore') @observer export default class ProfileSettings extends Component {
  async start() {

  }

  componentDidMount(){
    this.getCurrentProfileSettings();
    console.log('hello from profilesettings')
  }

  @observable success = '';
  @observable error = '';

  
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
      const data = {
        email: this.emailInput,
        oldPassword: this.oldPasswordInput,
        newPassword: this.newPasswordInput,
        newPasswordCheck: this.newPasswordCheckInput,
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
          console.log(res);

          if(res.errorMessage){
            this.success = '';
            this.error = res.errorMessage;
          } else {
            this.error = '';
            this.success = res.message;
            this.getCurrentProfileSettings();
          
            this.newPasswordInput = '';
            this.newPasswordCheckInput = '';
            this.oldPasswordInput = '';
          }

        });



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