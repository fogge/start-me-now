@inject('loginStore') @observer class GuestRoute extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => (
        !this.props.loginStore.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />

      )} />
    )
  }

}
export default GuestRoute;