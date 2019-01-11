import './Header.scss';

@inject('loginStore') @observer export default class Header extends Component {
  async start() {}

  @observable date = null;

  componentDidMount() {
    setInterval(
      () => this.date = new Date(),
      1000
    );
  }


}