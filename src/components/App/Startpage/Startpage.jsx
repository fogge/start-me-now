<section className='Startpage'>
  <Container className="px-3">
    <div className='startpage-holder p-0 mx-1'>
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