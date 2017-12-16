angular.module('video-player')


  .component('app', {
    // bindings: {  
    // videos: '<'
    // },
    controller: function () {
      this.videos = exampleVideoData;
      this.videoplayer = exampleVideoData[0];
    //   this.videos = exampleVideoData;
    //   // console.log(this.videos);
    },
    
    templateUrl: './src/templates/app.html'

  });
