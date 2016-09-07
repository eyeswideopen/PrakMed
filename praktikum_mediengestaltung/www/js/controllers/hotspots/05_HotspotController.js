/**
 * Created by maximiliankorner on 04/09/16.
 */
angular.module('water').controller('05_HotspotController', function ($scope, waterAudio, MediaManager) {

//
  //AUDIO ELEMENT
  //

  // stop any track before leaving current view
  $scope.$on('$ionicView.beforeLeave', function () {
    MediaManager.stop();
  });

  //AUDIO PLAYER CONFIG
  $scope.myTrack = {
    url: 'audio/Hotspot_05_Audio_Geduld_edit.mp3',
    artist: 'Frau Jung-Hüttl',
    title: 'Geduld Geduld Geduld',
    art: 'img/high_res/Hotspot_05.jpg'
  }

});
