
  try {
    const loadClient = () => { // 1*
    gapi.client.setApiKey( 'AIzaSyDp-Ef6SpV-umrNe9-8TvnmPWiuFylJbNw' ) // 2*

    return gapi.client.load( "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest" ) // 3*
      .then( () => console.log('Google client API successfully loaded!') )
      .then( () => console.log( 'YT Data API successfully loaded' ) )
      .catch( error => console.log(`Error on loading YT Data API, see:`, error))
    }

  gapi.load( 'client', loadClient ) // 4* 

  } catch( err ) {
    console.log(`Error loading YT Data API, see:`, err)
    
  }

