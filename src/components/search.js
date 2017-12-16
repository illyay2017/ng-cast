angular.module('video-player')

  .component('search', {
    bindings: {  
      searchTerm: '<',
    },
    // TODO
    controller: function() {
      // console.log(this);
    },
    templateUrl: './src/templates/search.html'
  });
