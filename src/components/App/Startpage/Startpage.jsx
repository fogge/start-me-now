<section className='Startpage'>
  <Container className="px-md-3 px-0">
    <div className='startpage-holder p-2 p-md-0 mx-md-1 mx-0'>
      <Nav tabs className="mb-2">
        <NavItem>
          <NavLink to='/login'>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/register'>Register</NavLink>
        </NavItem>
      </Nav>
      {this.props.isLoginForm ? <Login /> : <Register />}
    </div>
  </Container>
</section>