<Fragment>
  
  <Route path='/login' component={props => <Startpage {...props} isLoginForm={true} />} />
  <Route path='/register' component={props => <Startpage {...props} isLoginForm={false} />} />
  <Route exact path='/'>
    <WidgetsHolder />
  </Route>
</Fragment>