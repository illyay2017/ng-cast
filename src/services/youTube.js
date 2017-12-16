angular.module('video-player')
  .service('youTube', function($http) {

  // TODO
    $http({
      method: 'GET',
      params: {
        part: 'snippet',
        query: 'cats', 
        maxResults: '5', 
        key: 'AIzaSyCxc4aWHPvHrM5Pvpk6-yLs41GZMW3pI18'},
      url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log('success: ', response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('error: ', response);
    });

    
  });
