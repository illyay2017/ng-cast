angular.module('video-player')
  .component('videoList', {
    bindings: {  
      videos: '<'
    },
    // displayVideos: function() {
    //   this.videos = exampleVideoData;
    //   console.log(this.videos);
    // },
    
    controller: function() {
      this.videos = exampleVideoData;
      // console.log(this.videos);
    },
    templateUrl: '/src/templates/videoList.html'
  });
