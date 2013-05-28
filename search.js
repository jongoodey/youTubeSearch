// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
    //console.log(response.items[0].snippet.thumbnails.medium);
    var thumb = response.items[0].snippet.thumbnails.default.url;
    document.getElementById('thumbnail').src = thumb;
    var vid = response.items[0].id.videoId;
    document.getElementById('vid').src = "http://www.youtube.com/embed/" + vid;
    
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'ProfileProductionsUK'
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}


http://www.youtube.com/results?nfpr=1&search_query=profileproductionsuk&filters=channel&lclk=channel
