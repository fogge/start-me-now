<Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: this.name
    }}
    options={{
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />