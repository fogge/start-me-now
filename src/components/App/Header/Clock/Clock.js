import './Clock.scss';

@observer export default class Clock extends Component {
 
  async start(){
  }

  @observable date = null;
  @observable time = null;



  componentDidMount() {

    setInterval(() => {
      const date = new Date();
      const dateString =
      date.getUTCFullYear() + "/" +
      ("0" + (date.getUTCMonth()+1)).slice(-2) + "/" +
      ("0" + date.getUTCDate()).slice(-2) + " " +
      ("0" + date.getUTCHours()).slice(-2) + ":" +
      ("0" + date.getUTCMinutes()).slice(-2) + ":" +
      ("0" + date.getUTCSeconds()).slice(-2);

      this.date = dateString.slice(0,10);
      this.time = dateString.slice(11);
    }, 1000);
    
  }

  
}