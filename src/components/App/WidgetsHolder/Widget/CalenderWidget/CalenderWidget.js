@inject('widgetStore') @observer export default class CalenderWidget extends Component {
  async start() {

  }
  
  @observable calenderLinks = ['andreas.dirt@gmail.com', 'tu9edjna3mkm11ibcgosf92qm4@group.calendar.google.com'];

  @observable colors = ["#A32929", "#B1440E", "#4E5D6C", "#7A367A", "#2F6309", "#113F47", "#125A12", "#4A716C", "#853104", "#5C1158", "#2F6213", "#23164E", "#5B123B", "#29527A", "#5229A3", "#B1365F", "#8D6F47", "#333333", "#705770", "#0D7813", "#AB8B00", "#2952A3", "#28754E", "#875509", "#5F6B02", "#8C500B", "#528800", "#6E6E41", "#88880E", "#1B887A", "#5A6986", "#BE6D00", "#691426", "#182C57", "#42104A", "#060D5E", "#0F4B38", "#6B3304"]

  @observable fullSourceLink = this.createSourceLink();
  @observable title = 'calender-widget-iframe'


  createSourceLink = () => {

    let links = this.props.widgetStore.calenderLinks.map((link, i) => {
      return `src=${link}&color=${encodeURIComponent(this.colors[i])}&`
    })

    return "https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showTabs=0&showTz=0&height=400&wkst=1&bgcolor=%23FFFFFF&" + links.join('') + "color=%23B1365F&ctz=Europe%2FStockholm";
  }

}