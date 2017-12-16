angular.module('video-player')
  .component('videoList', {
    bindings: {  
      videos: '<'
    }, 
    controller: function() {
      this.videos = exampleVideoData;
    },
    templateUrl: './src/templates/videoList.html'
  });
