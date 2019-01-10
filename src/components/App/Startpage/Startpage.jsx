<section className='Startpage'>
  <Container className='mt-md-3 p-0'>
    <Row className="col-md-8 mx-auto">
      <Nav tabs>
        <NavItem>
          <NavLink to='/login'>
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/register'>
            Register
          </NavLink>
        </NavItem>
      </Nav>
      {this.props.isLoginForm ? <Login /> : <Register />}

    </Row>
  </Container>


</section>
