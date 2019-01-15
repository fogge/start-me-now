@inject('loginStore') @observer class PrivateRoute extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => (
        this.props.loginStore.isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />

      )} />
    )
  }

}
export default PrivateRoute;