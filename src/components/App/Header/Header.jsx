<Container className="header d-flex justify-content-between align-items-center py-3 px-3">
  <div className="logoholder ml-1">
    <img src={require('./imgs/logo.png')} alt="" />
  </div>

  <Clock value={this.date} className="clock" size="100" />

  <div className="d-flex justify-content-end p-0">
    <Link
      to="/"
      className="d-flex flex-column justify-content-center align-items-center mr-3 iconholder"
    >
      <i className="fas fa-table" />
      <p>Widgets</p>
    </Link>

    <Link
      to="/profile"
      className="d-flex flex-column justify-content-center align-items-center mr-3 iconholder"
    >
      <i className="fas fa-user" />
      <p>Profile</p>
    </Link>
    {this.props.loginStore.isLoggedIn ? (
      <div
        onClick={this.props.loginStore.logout}
        className="d-flex flex-column justify-content-center align-items-center mr-1 iconholder"
      >
        <i className="fas fa-sign-out-alt" />
        <p>Log out</p>
      </div>
    ) : (
      <div
        onClick={this.login}
        className="d-flex flex-column justify-content-center align-items-center mr-1 iconholder"
      >
        <i className="fas fa-sign-in-alt" />
        <p>Log in</p>
      </div>
    )}
  </div>
</Container>