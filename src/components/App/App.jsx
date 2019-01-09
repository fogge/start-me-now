<Fragment>
  {this.props.loginStore.loading ? 
  null 
  
  : (
    <Switch>
      <PrivateRoute exact path='/' component={WidgetsHolder} />

      <GuestRoute
        path='/login'
        component={props => <Startpage {...props} isLoginForm={true} />}
      />
      <GuestRoute
        path='/register'
        component={props => <Startpage {...props} isLoginForm={false} />}
      />
    </Switch>
  )
  
  }
</Fragment>