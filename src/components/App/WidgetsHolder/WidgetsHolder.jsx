<Fragment>
  <Header />

  {this.props.widgetStore.widgetsWasFetched ? (
    <Container>
      <div className='d-flex flex-wrap p-0'>
        <Widget>
          <NewsWidget />
        </Widget>
        <Widget>
          <SpotifyWidget />
        </Widget>
        <Widget>
          <FacebookWidget />
        </Widget>

        <Widget>
          <TwitterWidget />
        </Widget>
        <Widget>
          <CalenderWidget />
        </Widget>
        <Widget><QuickNoteWidget /></Widget>
      </div>
    </Container>
  ) : null}
</Fragment>
