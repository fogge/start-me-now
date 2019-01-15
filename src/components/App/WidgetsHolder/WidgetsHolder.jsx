<Fragment>

  {this.props.widgetStore.widgetsWasFetched ? (
    <Container className="p-0 px-md-3">
      <div className='d-flex flex-wrap p-0'>

        { this.props.widgetStore.widgetPosition.length > 0
          
          ?
          
          this.props.widgetStore.widgetPosition.map(widget => {
          return <Widget key={widget} childWidget={widget}></Widget>})
          :
          null
      }
        
      </div>
    </Container>
  ) : null}
</Fragment>
