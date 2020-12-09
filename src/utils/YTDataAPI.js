// 1* Before we access access any API belonging to Google, we must set our key, and load the discovery path with the client library we loaded
// 2* Here we are loading the discovery URL that allows access to the specific location we can call methods on
    // Its our way of saying this is what we want access to (within google's client service) so we can request youtube vid data!
// 3* When it loads, our client constructor then appends the methods generated from the URL
// 4* Before using any google APIs we need to enable access to our middle man that routes us access to a specific library (Its like we are asking and threading to what we want )
  // This method allows a second argument (callback) to be executed upon our promise resolving to our target library
    // For reference, https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md


try {
  const loadClient = () => { // 1*
  gapi.client.setApiKey( 'AIzaSyDp-Ef6SpV-umrNe9-8TvnmPWiuFylJbNw' ) // 2*

  return gapi.client.load( "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest" ) // 3*
    .then( () => console.log('Google client API successfully loaded!') )
    .then( () => console.log( 'YT Data API successfully loaded' ) )
}

gapi.load( 'client', loadClient ) // 4* 

} catch(err) {
  console.log(`Error loading YT Data API, see: ${ err } `)
}


