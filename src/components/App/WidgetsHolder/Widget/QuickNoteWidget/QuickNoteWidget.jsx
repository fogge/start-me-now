<Fragment>
  <div className='quick-content d-flex flex-column'>
    <div className='d-flex py-2 justify-content-between align-items-center'>
      <img className='ml-2' src={require("./imgs/pin.png")} alt='' />
      <h3>Quick notes!</h3>
      <img className='mr-2' src={require("./imgs/pin.png")} alt='' />
    </div>
    <Input
      type='textarea'
      name='text'
      id='exampleText'
      placeholder='Write something here!'
      className='quick-textarea flex-fill'
      value={this.quickNotesInput}
      onChange={this.getQuickNotesInput}
    />

    <div className='d-flex justify-content-end align-items-center'>
      {this.saved ? (
        <h5 className='success-message show mr-2 mb-0'>Successfully saved!</h5>
      ) : (
        <h5 className='success-message mr-2 mb-0'>Successfully saved!</h5>
      )}
      <Button onClick={this.saveQuickNotes} className='px-4 m-2 btn-success'>
        Save
      </Button>
    </div>
  </div>
</Fragment>
