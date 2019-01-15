<Navbar color='light' light expand='md' className='container header mb-3 mb-md-0'>
  <NavbarBrand to='/'>    
      <img src={require('./imgs/logo.png')} alt="Start me now logotype" className="logoholder" />
    </NavbarBrand>
  <NavbarToggler onClick={this.toggleCollapse} />
  <Collapse isOpen={this.navCollapse} navbar className=''>


    <div className='clock-holder d-none d-md-block'>
      <Clock />
    </div>

    <Nav className='ml-auto' navbar>
      <Link
        to='/'
        className='d-flex flex-md-column justify-content-md-center align-items-center mr-0 mr-md-3 iconholder'
      >
        <i className='fas fa-table mr-2 mr-md-0' />
        <p>Widgets</p>
      </Link>

      <Link
        to='/profile'
        className='d-flex flex-md-column justify-content-md-center align-items-center mr-0 mr-md-3 iconholder'
      >
        <i className='fas fa-user mr-2 mr-md-0' />
        <p>Profile</p>
      </Link>
      {this.props.loginStore.isLoggedIn ? (
        <div
          onClick={this.props.loginStore.logout}
          className='d-flex flex-md-column justify-content-md-center align-items-center mr-0 mr-md-3 iconholder'
        >
          <i className='fas fa-sign-out-alt mr-2 mr-md-0' />
          <p>Sign out</p>
        </div>
      ) : (
        <div
          onClick={this.login}
          className='d-flex flex-md-column justify-content-md-center align-items-center mr-0 mr-md-3 iconholder'
        >
          <i className='fas fa-sign-in-alt mr-2 mr-md-0' />
          <p>Sign in</p>
        </div>
      )}
    </Nav>
  </Collapse>
</Navbar>
