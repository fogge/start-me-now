<Container className="p-0">
  <h1>LOGIN</h1>

  <Form className='m-2'>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for='loginEmail'>Email</Label>
          <Input
            type='email'
            name='email'
            id='loginEmail'
            placeholder='Email'
            value={this.email}
            onChange={this.getEmail}
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for='loginPassword'>Password</Label>
          <Input
            type='password'
            name='password'
            id='loginPassword'
            placeholder='Password'
            value={this.password}
            onChange={this.getPassword}
          />
        </FormGroup>
      </Col>
    </Row>

    <Button onClick={this.submitLogin}>Sign in</Button>
  </Form>
</Container>
