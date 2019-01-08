<Container className="p-0">
  <h1>REGISTRATION</h1>
  <Form className='m-2'>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for='emailRegistration'>Email</Label>
          <Input
            type='email'
            name='email'
            id='emailRegistration'
            placeholder='Email'
            value={this.email}
            onChange={this.getEmail}
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={this.password}
            onChange={this.getPassword}
          />
        </FormGroup>

        <FormGroup>
          <Label for='passwordCheck'>Password Check</Label>
          <Input
            type='password'
            name='passwordCheck'
            id='passwordCheck'
            placeholder='Password check'
            value={this.passwordCheck}
            onChange={this.getPasswordCheck}
          />
        </FormGroup>
      </Col>
    </Row>

    <Button onClick={this.submitRegistration}>Register</Button>
  </Form>
</Container>
