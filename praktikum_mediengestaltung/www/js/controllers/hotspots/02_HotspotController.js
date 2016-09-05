/**
 * Created by maximiliankorner on 04/09/16.
 */
angular.module('water').controller('02_HotspotController', function ($scope, waterAudio, MediaManager) {

  //
  //AUDIO ELEMENT
  //

  // stop any track before leaving current view
  $scope.$on('$ionicView.beforeLeave', function () {
    MediaManager.stop();
  });

  //AUDIO PLAYER CONFIG
  $scope.myTrack = {
    url: 'audio/Hotspot_02_Audio_Fotoflug_edit.mp3',
    artist: 'Frau Jung-Hüttl',
    title: 'Fotoflug mit Hindernissen',
    art: 'img/profile.jpg'
  }
});
