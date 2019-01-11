<Fragment>
  <Header />
  <section className="Profile">
    <Container className="px-3">
      <div className="profile-holder p-0 mx-1">
        <Nav tabs className="mb-2">
          <NavItem>
            <NavLink
              className={
                this.showSetting === 'Profile'
                  ? 'active settings-link'
                  : 'settings-link'
              }
              to='/profile-settings'
            >
              Profile settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                this.showSetting === 'Widgets'
                  ? 'active settings-link'
                  : 'settings-link'
              }
              onClick={this.widgetSettings}
              to='/widget-settings'
            >
              Widget settings
            </NavLink>
          </NavItem>
        </Nav>

        {this.showSetting === 'Profile' ? (
          <ProfileSettings />
        ) : (
          <WidgetSettings />
        )}
      </div>
    </Container>
  </section>
</Fragment>
