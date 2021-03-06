<Container className='p-0' onKeyDown={e => {e.key === 'Enter' && this.submitLogin()}}>
  <h1 className='ml-3 my-0'>
    <i className='fas fa-user-check mr-3' />
    Login
  </h1>
  <hr className='mt-2 mb-0' />
  <Form className='p-2 p-md-3'>
    <FormGroup>
      <Label for='loginEmail'>Email</Label>
      <Input
        autoComplete='email'
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
        autoComplete='current-password'
        type='password'
        name='password'
        id='loginPassword'
        placeholder='Password'
        value={this.password}
        onChange={this.getPassword}
      />
    </FormGroup>

    <div className='d-flex align-items-center justify-content-end mt-2'>
      {this.error ? <h5 className="error-message show mr-3 mb-0">{this.error}</h5> : <h5 className="error-message mr-3 mb-0"></h5> }
      <Button onClick={this.submitLogin} className='px-4 btn-success'>

      

        Sign in
      </Button>
    </div>
  </Form>
</Container>
