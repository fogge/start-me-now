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
      date.getFullYear() + "/" +
      ("0" + (date.getMonth()+1)).slice(-2) + "/" +
      ("0" + date.getDate()).slice(-2) + " " +
      ("0" + date.getHours()).slice(-2) + ":" +
      ("0" + date.getMinutes()).slice(-2) + ":" +
      ("0" + date.getSeconds()).slice(-2);

      this.date = dateString.slice(0,10);
      this.time = dateString.slice(11);
    }, 1000);
    
  }

  
}