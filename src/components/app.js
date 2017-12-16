angular.module('video-player')


  .component('app', {
    // bindings: {  
    //   videoplayer: '<',
    // },
    
    controller: function () {
      this.videos = exampleVideoData;
      this.videoplayer = exampleVideoData[0];
      
      // console.log('this is the app controller: ', this);

      // this.videoplayer = exampleVideoData[0];
      // console.log('outside swapVideo:', this.videoplayer);
      this.swapVideo = (video) => {
        this.videoplayer = video;
      };
    //   this.videos = exampleVideoData;
    //   // console.log(this.videos);
    },
    
    templateUrl: './src/templates/app.html'

  });
