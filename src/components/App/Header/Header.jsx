<Container className="header d-flex justify-content-end py-4 px-2">
  <div className="d-flex flex-column align-items-center mr-3 iconholder">  
    <i className="fas fa-user"></i>
    <p>Profile</p>

  </div>
  {this.props.loginStore.isLoggedIn ? 
    <div className="d-flex flex-column align-items-center mr-3 iconholder">  
      <i className="fas fa-sign-out-alt"></i>
      <p>Log out</p>
    </div>
    :
    <div className="d-flex flex-column align-items-center mr-3 iconholder">  
      <i className="fas fa-sign-in-alt"></i>
      <p>Log in</p>
    </div>
  }

</Container>