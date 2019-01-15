<Fragment>
  <h1 className='ml-3 my-0'>
    <i className='fas fa-user mr-3' />
    Profile settings
  </h1>
  <hr className='mt-2 mb-0' />

  <Form className='widget-settings p-2 p-md-3' onKeyDown={e => {e.key === 'Enter' && this.saveProfile()}}>
    <FormGroup>
      <Label for='name'>Name</Label>

      <Input
        autoComplete='name'
        name='name'
        id='name'
        placeholder='Name'
        value={this.nameInput}
        onChange={this.getNameInput}
      />
    </FormGroup>

    <FormGroup>
      <Label for='email'>Email</Label>

      <Input
        autoComplete='email'
        name='email'
        id='email'
        placeholder='Email'
        value={this.emailInput}
        onChange={this.getEmailInput}
      />
    </FormGroup>

    <FormGroup>
      <Label for='newPassword'>New password</Label>

      <Input
        autoComplete='new-password'
        type="password"
        name='newPassword'
        id='newPassword'
        placeholder='New password'
        value={this.newPasswordInput}
        onChange={this.getnewPasswordInput}
      />
    </FormGroup>

    <FormGroup>
      <Label for='newPasswordCheck'>Enter password again</Label>

      <Input
        autoComplete='new-password'
        type="password"
        name='newPasswordCheck'
        id='newPasswordCheck'
        placeholder='New password'
        value={this.newPasswordCheckInput}
        onChange={this.getnewPasswordCheckInput}
      />
    </FormGroup>

    <FormGroup>
      <Label for='oldPassword'>Old password</Label>

      <Input
        autoComplete='current-password'
        type="password"
        name='oldPassword'
        id='oldPassword'
        placeholder='Old password'
        value={this.oldPasswordInput}
        onChange={this.getOldPasswordInput}
      />
    </FormGroup>


    <div className='d-flex align-items-center justify-content-end mt-2'>
      {this.success ? <h5 className="success-message show mr-3 mb-0">{this.success}</h5> : <h5 className="success-message mr-3 mb-0"></h5> }
      {this.error ? <h5 className="error-message show mr-3 mb-0">{this.error}</h5> : <h5 className="error-message mr-3 mb-0"></h5> }
      <Button onClick={this.saveProfile} className='px-4 btn-success'>
        Save
      </Button>
    </div>
  </Form>
</Fragment>
