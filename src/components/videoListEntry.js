angular.module('video-player')
  .component('videoListEntry', {
    bindings: {  
      video: '<'
    }, 
    controller: function() {
      this.video = exampleVideoData[0];
      this.title = this.video.snippet.title;
      this.thumbnail = this.video.snippet.thumbnails.default.url; 
      this.description = this.video.snippet.description;
    },
    templateUrl: './src/templates/videoListEntry.html'
  });
