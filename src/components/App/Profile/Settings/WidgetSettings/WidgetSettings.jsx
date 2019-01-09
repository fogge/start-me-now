<Fragment>

    <h1 className="ml-2 my-0"><i className="fas fa-question-circle mr-2"></i>Widget settings</h1>
    <hr className="my-2"/>

    <div className="widget-settings p-2 p-md-3">
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
                  <li>Repo - a repo on github that will be cloned.</li>
                  <li>Branch - choose a branch from the repo.</li>
                  <li>A name - what you want to call the application. This will also be your subdomain.</li>
                  <li>An application-port. This is the port that your node.js-application is using.</li>
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
                  <li>Repo - a repo on github that will be cloned.</li>
                  <li>Branch - choose a branch from the repo.</li>
                  <li>A name - what you want to call the application. This will also be your subdomain.</li>
                  <li>An application-port. This is the port that your node.js-application is using.</li>
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
                  <li>Repo - a repo on github that will be cloned.</li>
                  <li>Branch - choose a branch from the repo.</li>
                  <li>A name - what you want to call the application. This will also be your subdomain.</li>
                  <li>An application-port. This is the port that your node.js-application is using.</li>
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
                <ul>
                  <li>Repo - a repo on github that will be cloned.</li>
                  <li>Branch - choose a branch from the repo.</li>
                  <li>A name - what you want to call the application. This will also be your subdomain.</li>
                  <li>An application-port. This is the port that your node.js-application is using.</li>
                </ul>
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

          <div className="d-flex justify-content-end mt-2">
            <Button onClick={this.saveWidgets} className="px-4 btn-success">Save</Button>
          </div>

      </div>










  {/* <h3>Widgets Settings!</h3>
  <p>Here you can set everything you want to show in the widgets.</p>
  <hr />
  <Form className="widgetsettings">

   
    <FormGroup>
      <Label for='newsurl'>
        <h5>News!</h5>
        <p> Insert a newspaper link here! (You have to try it, not everything is fitable here!) </p>
        <p> For example: https://aftonbladet.se </p>
      </Label>
      <Input
        name='newsurl'
        id='newsurl'
        placeholder='News link'
      />
    </FormGroup>

    <hr />
    <FormGroup>
      <Label for='spotifyurl'>
        <h5>Spotify!</h5>
        <p> Insert a spotify playlist link here! </p>
        <p> For example: https://open.spotify.com/embed/user/foggethemainman/playlist/4dXsFySwI9LPqx8abxVhrp</p>
        <p>Right-click any song, album, artist, playlist, podcast or episode in the Spotify player and select “Share”. Click on 'Copy Link' or 'Copy Spotify URI' to copy the Spotify Link or URI.</p>
      </Label>
      <Input
        name='spotifyurl'
        id='spotifyurl'
        placeholder='Spotify link'
      />
    </FormGroup>
   
  </Form>



  <Button>Submit</Button> */}


</Fragment>
