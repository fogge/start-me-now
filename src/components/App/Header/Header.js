import './Header.scss';

@inject('loginStore') @observer export default class Header extends Component {
  async start() {}

  @observable navCollapse = true;

  toggleCollapse = () => {
    this.navCollapse = !this.navCollapse;
  }

}