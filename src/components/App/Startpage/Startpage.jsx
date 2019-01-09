<section className='Startpage'>
  <Container className='mt-3'>
    <Row className="col-8 mx-auto">
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
