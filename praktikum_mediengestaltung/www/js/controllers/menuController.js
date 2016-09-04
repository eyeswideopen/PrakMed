angular.module('water').controller('menuController', function ($scope, waterAudio) {

  console.log("whatever menu");

  $scope.checkHeadphones = function () {
    waterAudio.shouldStartPlayback().then(function(){alert("available")}).catch(function(){alert("not available")});
  }

    

});
