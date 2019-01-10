<Fragment>
  <Header />
  <section className='Profile'>
    <Container>
      <Nav tabs className='mb-2'>
        <NavItem>
          <NavLink className={this.showSetting === 'Profile' ? 'active settings-link' : 'settings-link'} onClick={this.profileSettings}  >
            Profile settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={this.showSetting === 'Widgets' ? 'active settings-link' : 'settings-link'} onClick={this.widgetSettings} >
            Widget settings
          </NavLink>
        </NavItem>
      </Nav>

      {this.showSetting === 'Profile' ? 
        <ProfileSettings /> :
        <WidgetSettings />
      }

    </Container>
  </section>
</Fragment>
