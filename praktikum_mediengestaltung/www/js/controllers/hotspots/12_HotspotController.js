/**
 * Created by maximiliankorner on 04/09/16.
 */
angular.module('water').controller('12_HotspotController', function ($scope, waterAudio, MediaManager) {

  //
  //AUDIO ELEMENT
  //

  // stop any track before leaving current view
  $scope.$on('$ionicView.beforeLeave', function () {
    MediaManager.stop();
  });

  //AUDIO PLAYER CONFIG
  $scope.myTrack = {
    url: 'audio/Hotspot_12_Audio_schwer zugaenglich_edit.mp3',
    artist: 'Frau Jung-Hüttl',
    title: 'Schwer zugänglich',
    art: 'img/high_res/Hotspot_12.jpg'
  }

});
