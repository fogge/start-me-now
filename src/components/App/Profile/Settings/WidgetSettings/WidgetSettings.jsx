<Fragment>

    <h1 className="ml-3 my-0"><i className="fas fa-question-circle mr-3"></i>Widget settings</h1>
    <hr className='mt-2 mb-0' />

    <div className="widget-settings p-2 p-md-3" onKeyDown={e => {e.key === 'Enter' && this.saveWidgets()}}>
          <Card className={this.spotify ? "opened-collapse" : ""}>
            <h4 className={this.spotify ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('spotify')}><div className="icon-holder-docs"><i className="fab fa-spotify"></i></div>Spotify</h4>
            {this.spotify && <hr className="my-0" />}
            <Collapse isOpen={this.spotify}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ul>
                  <li>Insert a spotify playlist link here.</li>
                  <li>For example: https://open.spotify.com/user/foggethemainman/playlist/5ISZg0yCyPMXlTcDemeHRC?si=UtDUxqlRR-CIrMZSp-7WjA</li>
                  <li>Right-click any song, album, artist, playlist, podcast or episode in the Spotify player and select “Share”. Click on 'Copy Link' to copy the Spotify Link.</li>
                </ul>
                <hr />

                <FormGroup>
                  <Input
                    name='spotifyurl'
                    id='spotifyurl'
                    placeholder='Spotify link'
                    value={this.spotifyInput}
                    onChange={this.getSpotifyInput}
                  />
                </FormGroup>

              </CardBody>
            </Collapse>
          </Card>

          <Card className={this.news ? "opened-collapse mt-2" : "mt-2"}>
            <h4 className={this.news ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('news')}><div className="icon-holder-docs"><i className="fas fa-newspaper"></i></div>News</h4>
            {this.news && <hr className="my-0" />}
            <Collapse isOpen={this.news}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ul>
                  <li>Insert a news link here.</li>
                  <li>For example: https://omni.se/</li>
                  <li>Note that not all news can be fitted in this widget. You can try one and if it doesnt fit, choose another.</li>
                </ul>
                <hr />

                <FormGroup>
                  <Input
                    name='newsurl'
                    id='newsurl'
                    placeholder='News link'
                    value={this.newsInput}
                    onChange={this.getNewsInput}
                  />
                </FormGroup>

              </CardBody>
            </Collapse>
          </Card>

          <Card className={this.facebook ? "opened-collapse mt-2" : "mt-2"}>
            <h4 className={this.facebook ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('facebook')}><div className="icon-holder-docs"><i className="fab fa-facebook-square"></i></div>Facebook Page</h4>
            {this.facebook && <hr className="my-0" />}
            <Collapse isOpen={this.facebook}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ul>
                  <li>Insert a facebook-page link here.</li>
                  <li>For example: https://www.facebook.com/StickyDirt/</li>
                </ul>
                <hr />

                <FormGroup>
                  <Input
                    name='facebookurl'
                    id='facebookurl'
                    placeholder='Facebook link'
                    value={this.facebookInput}
                    onChange={this.getFacebookInput}
                  />
                </FormGroup>

              </CardBody>
            </Collapse>
          </Card>

          <Card className={this.twitter ? "opened-collapse mt-2" : "mt-2"}>
            <h4 className={this.twitter ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('twitter')}><div className="icon-holder-docs"><i className="fab fa-twitter-square"></i></div>Favorite Twitter</h4>
            {this.twitter && <hr className="my-0" />}
            <Collapse isOpen={this.twitter}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ul>
                  <li>Insert a twitter-name here.</li>
                  <li>For example: reactjs</li>
                </ul>
                <hr />

                <FormGroup>
                  <Input
                    name='twitterurl'
                    id='twitterurl'
                    placeholder='Twitter link'
                    value={this.twitterInput}
                    onChange={this.getTwitterInput}
                  />
                </FormGroup>

              </CardBody>
            </Collapse>
          </Card>

          <Card className={this.calender ? "opened-collapse mt-2" : "mt-2"}>
            <h4 className={this.calender ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('calender')}><div className="icon-holder-docs"><i className="far fa-calendar-alt"></i></div>Google Calender</h4>
            {this.calender && <hr className="my-0" />}
            <Collapse isOpen={this.calender}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ol>
                  <li>On a computer, open <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">Google Calendar</a> You can only get the link in from a computer, not the Google Calendar app. </li>
                  <li>In the top right, click Settings <i className="fas fa-cog"></i> > <strong>Settings</strong>.</li>
                  <li>On the left side of the screen, click the name of the calendar you want the link to.</li>
                  <li>In the "Integrate calendar" section, copy the <strong>Calender-id</strong>.</li>
                  <li>For example: <strong>mail@gmail.com</strong> or a whole id: <strong>d02it01923jfq823rtrt@group.calendar.google.com</strong></li>
                  <li>You can choose more than one calender, seperate them by a <strong>","</strong></li>
                  <li>For example: <strong>mail@gmail.com, d02it01923jfq823rtrt@group.calendar.google.com</strong></li>
                  <li>Note: the calenders must be public</li>
                </ol>
                <hr />

                <FormGroup>
                  <Input
                    name='calenderurls'
                    id='calenderurls'
                    placeholder='Calenders links'
                    value={this.calenderInput}
                    onChange={this.getCalenderInput}
                  />
                </FormGroup>

              </CardBody>
            </Collapse>
          </Card>

          <Card className={this.background ? "opened-collapse mt-2" : "mt-2"}>
            <h4 className={this.background ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('background')}><div className="icon-holder-docs"><i className="far fa-calendar-alt"></i></div>Background Image</h4>
            {this.background && <hr className="my-0" />}
            <Collapse isOpen={this.background}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ul>
                  <li>Insert a picture-link here.</li>
                  <li>For example: https://www.planwallpaper.com/static/images/8ccb4ec4225b290726ae9be975220ff4.jpg</li>
                  <li>Note: Use a big picture</li>
                </ul>
                <hr />

                <FormGroup>
                  <Input
                    name='backgroundurl'
                    id='backgroundurl'
                    placeholder='Background link'
                    value={this.backgroundInput}
                    onChange={this.getBackgroundInput}
                  />
                </FormGroup>

              </CardBody>
            </Collapse>
          </Card>

          <Card className={this.widgetsorder ? "opened-collapse mt-2" : "mt-2"}>
            <h4 className={this.widgetsorder ? "px-3 py-2 heading-active mb-0" : "px-3 py-2 heading"} color="primary" onClick={() => this.toggleCollapse('widgetsorder')}><div className="icon-holder-docs"><i className="far fa-calendar-alt"></i></div>Widgets order</h4>
            {this.widgetsorder && <hr className="my-0" />}
            <Collapse isOpen={this.widgetsorder}>
              <CardBody className="pb-2 pt-0 mt-2 opened-collapse">
                <h5>Instructions</h5>
                <ul>
                  <li>Drag the name of any widget to its placeholder to change the position of the widget.</li>
                  <li>Note: make sure all widgets are placed within boxes or you won't be able to save.</li>
                </ul>
                <hr />


                <h5 className="widget-rest-container-header p-2">Rest container, please have it empty before saving</h5>
                <div id="widget-rest-container" onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)} className="d-flex">
                 
                </div>
                <div className="d-flex flex-wrap">
                  {this.myWidgets.map(x => x)}
                </div>






              </CardBody>
            </Collapse>
          </Card>

          <div className="d-flex align-items-center justify-content-end mt-2">
            {this.saved ? <h5 className="success-message show mr-3 mb-0">Successfully saved!</h5> : <h5 className="success-message mr-3 mb-0"></h5> }
            {this.error ? <h5 className="error-message show mr-3 mb-0">Something went wrong!</h5> : <h5 className="error-message mr-3 mb-0"></h5> }

            <Button onClick={this.saveWidgets} className="px-4 btn-success">Save</Button>
          </div>

      </div>



</Fragment>
