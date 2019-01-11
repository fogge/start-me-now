<div className="mb-3 bg-header">
  {this.props.loginStore.loading ? null : (
    <Switch>
      <PrivateRoute exact path="/" component={WidgetsHolder} />
      <PrivateRoute exact path="/profile-settings" component={props => <Profile {...props} showSetting='Profile' /> } />
      <PrivateRoute exact path="/widget-settings" component={props => <Profile {...props} showSetting='Widget' /> } />
      <Redirect from='/profile' to='/profile-settings'/>

      

      <GuestRoute
        path="/login"
        component={props => <Startpage {...props} isLoginForm={true} />}
      />
      <GuestRoute
        path="/register"
        component={props => <Startpage {...props} isLoginForm={false} />}
      />
    </Switch>
  )}
</div>
