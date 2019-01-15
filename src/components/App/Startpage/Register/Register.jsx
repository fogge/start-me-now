<Container className='p-0'>
  <h1 className='ml-3 my-0'>
    <i className='fas fa-user-plus mr-3' />
    Register
  </h1>
  <hr className='mt-2 mb-0' />

  <div className='p-2 p-md-3'>
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
    <div className='d-flex align-items-center justify-content-end mt-2'>
      <Button onClick={this.submitRegistration} className='px-4 btn-success'>
        Register
      </Button>
    </div>
  </div>
</Container>
