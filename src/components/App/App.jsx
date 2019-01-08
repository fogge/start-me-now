<Fragment>
  {!loginStore.isLoggedIn && (
    <Route
      path='/login'
      component={props => <Startpage {...props} isLoginForm={true} />}
    />
  )}

  {!loginStore.isLoggedIn && (
    <Route
      path='/register'
      component={props => <Startpage {...props} isLoginForm={false} />}
    />
  )}

  {!loginStore.isLoggedIn && (
    <Route path='/' render={() => <Redirect to='/login' />} />
  )}

  {loginStore.isLoggedIn && (
    <Route path='/login' render={() => <Redirect to='/' />} />
  )}

  {loginStore.isLoggedIn && (
    <Route path='/register' render={() => <Redirect to='/' />} />
  )}

  {loginStore.isLoggedIn && <Route exact path='/' component={WidgetsHolder} />}
</Fragment>
