angular.module('video-player')
  .component('videoListEntry', {
    bindings: {  
      video: '<'
    }, 
    controller: function() {
      this.video = exampleVideoData[0];
      console.log(this.video);
    },
    templateUrl: './src/templates/videoListEntry.html'
  });
