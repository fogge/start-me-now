<Container className='p-0'>
  <h1 className='ml-3 my-0'>
    <i className='fas fa-user-check mr-3' />
    Login
  </h1>
  <hr className='mt-2 mb-0' />
  <div className='p-2 p-md-3'>
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

    <div className='d-flex align-items-center justify-content-end mt-2'>
      <Button onClick={this.submitLogin} className='px-4 btn-success'>
        Login
      </Button>
    </div>
  </div>
</Container>
