angular.module('water').controller('menuController', function ($scope, waterAudio) {


  //dev
  $scope.checkHeadphones = function () {
    waterAudio.shouldStartPlayback().then(function(){alert("available")}).catch(function(){alert("not available")});
  }

});
