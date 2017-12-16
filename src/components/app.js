angular.module('video-player')


  .component('app', {
    // bindings: {  
    // videos: '<'
    // },
    controller: function () {
      this.videos = exampleVideoData;
      this.videoplayer = exampleVideoData[0];

      this.swapVideo = function() {
        console.log(this.videoplayer);
        console.log('hello!!!!');
        // this.videoplayer = '???';
      };
    //   this.videos = exampleVideoData;
    //   // console.log(this.videos);
    },
    
    templateUrl: './src/templates/app.html'

  });
