<Fragment>
  {
    this.props.widgetStore.twitterName ? (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: this.props.widgetStore.twitterName
        }}
        options={{
          height: '400'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
    ) : null
  }
</Fragment>
