angular.module('video-player')
  .component('videoList', {
    bindings: {  
      videos: '<',
      swapVideo: '<'
    },
    // displayVideos: function() {
    //   this.videos = exampleVideoData;
    //   console.log(this.videos);
    // },
    
    controller: function() { 
      // this.title = this.videos[3];
      // console.log(this.videos);
    },
    templateUrl: '/src/templates/videoList.html'
  });
