<Fragment>
  <Header />

  {this.props.widgetStore.widgetsWasFetched ? (
    <Container>
      <div className='d-flex flex-nowrap p-0'>
        <Widget>
          <NewsWidget />
        </Widget>
        <Widget>
          <SpotifyWidget />
        </Widget>
        <Widget>
          <FacebookWidget />
        </Widget>
      </div>

      <div className='d-flex col-12 p-0'>
        <Widget>
          <TwitterWidget />
        </Widget>
        <Widget>
          <CalenderWidget />
        </Widget>
        <Widget />
      </div>
    </Container>
  ) : null}
</Fragment>
