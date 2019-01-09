<Fragment>
  <Header />
  <section className='Profile'>
    <Container className='mt-3'>
      <Row className="col-8 mx-auto">
        <h4>Your profile, {this.props.loginStore.user.email}</h4>

      </Row>
    </Container>
  </section>

</Fragment>

