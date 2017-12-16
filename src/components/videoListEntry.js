angular.module('video-player')
  .component('videoListEntry', {
    bindings: {  
      video: '<',
      swapThisVideo: '<',
      index: '<'
    }, 
    controller: function() {
      // var that = console.dir(this);

      // this.handleClick = () => {
      // console.log('hello');
      // console.log('this is the $scope: ', $scope);
      // console.log('this is the title: ' + that);
      // };
      
      // console.log(this.video);
      // this.video = video;
      // this.video;
      // this.title = this.video.snippet.title;
      // this.thumbnail = this.video.snippet.thumbnails.default.url; 
      // this.description = this.video.snippet.description;
    },
    templateUrl: './src/templates/videoListEntry.html'
  });
