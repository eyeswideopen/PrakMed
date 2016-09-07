/**
 * Created by maximiliankorner on 04/09/16.
 */
angular.module('water').controller('10_HotspotController', function ($scope, waterAudio, MediaManager) {
//
  //AUDIO ELEMENT
  //

  // stop any track before leaving current view
  $scope.$on('$ionicView.beforeLeave', function () {
    MediaManager.stop();
  });

  //AUDIO PLAYER CONFIG
  $scope.myTrack = {
    url: 'audio/Hotspot_10_Audio_Sauerstoff_edit.mp3',
    artist: 'Frau Jung-Hüttl',
    title: 'Nicht ohne Sauerstoff',
    art: 'img/high_res/Hotspot_10.jpg'
  }

});
