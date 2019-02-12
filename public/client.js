// client-side js
// run by the browser each time your view template is loaded

$(function() {
    
  $.get('/search-track', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    var trackName = $('<h3><a href="' + data.external_urls.spotify + '" target="blank">' + data.name + '</a></h3>');
    // var trackName = $(
    //   '<h3><a href="${data.external_urls.spotify}">${data.name}</a></h3>'
    // );
    trackName.appendTo('#search-track-container');
    
    var trackURL = data.external_urls.spotify;
    
    // Display the artist name
    var artists = '';
    
    data.artists.forEach(function(element) {
      artists = artists + element.name + ' ';
    });
    
    var artistName = $('<h5>' + artists + '</h5>');
    artistName.appendTo('#search-track-container');
    
    // Display the album art
    var img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
  $.get('/category-playlists', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the covers of the playlists
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
  });
  
  $.get('/audio-features', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    var track = 'Never Gonna Give You Up';
    var trackName = $('<h3>' + track + '</h3>');
    trackName.appendTo('#audio-features-container');
    
    var trackSinger = 'Rick Astley';
    var trackArtist = $('<h5>' + trackSinger + '</h5>');
    trackArtist.appendTo('#audio-features-container');
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "loudness", "speechiness"]
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
        feature.appendTo('#audio-features-container');
      }
    });
  });
  
  $.get('/artist', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image
    var img = $('<img class="circle-image" />');
    img.attr('src', data.images[0].url);
    img.appendTo('#artist-container');
    
    // Display the artist name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#artist-container');
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      var genreItem = $('<p>' + genre + '</p>');
      genreItem.appendTo('#artist-container');
    });
    
    // Display the artist's popularity value
    var popularity = 'Popularity: ';
    var popValue = $('<h5>' + popularity + data.popularity + '</h5>');
    popValue.appendTo('#artist-container');
    
    // Display the artist's number of followers
    var numFollowers = 'Followers: ';
    var followers = $('<h5>' + numFollowers + data.followers.total + '</h5>');
    followers.appendTo('#artist-container');
  });
  
  $.get('/artist-top-tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display artist name and country
    var artistName = $('<h5>' + data[1].artists[0].name + ' (South Korea)' + '</h5>');
    artistName.appendTo('#top-tracks-container');
    
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container');
    });
  });
  
  $.get('/new-releases', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /new-releases', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display new releases
    data.map(function(album, i) {
      var albumName = $('<li>' + album.name + '</li>');
      albumName.appendTo('#new-releases-container');
    });
  });

});
