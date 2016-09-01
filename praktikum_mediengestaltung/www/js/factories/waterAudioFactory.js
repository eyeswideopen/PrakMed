/**
 * Created by maximiliankorner on 01/09/16.
 */

angular.module('water').factory('waterAudio', function ($q, beaconManager, $rootScope, $ionicPlatform, MediaManager) {

  var waterAudio = {};

  //returns promise and makes async call to cordova plugin to check if headphones are available
  waterAudio.headphonesAvailable = function () {
    var def = $q.defer();
    if (window.cordova) {
      // running on device/emulator -> make call to plugin
      window.HeadsetDetection.detect(function (detected) {
        detected ? def.resolve() : def.reject()
      });
    } else {
      // running in dev mode just fake headphones
      def.reject();
    }
    return def.promise;
  };

  //determines if audio should be allowed to be played (if in exibition -> only headphones)
  waterAudio.shouldStartPlayback = function () {
    var def = $q.defer();
    if (beaconManager.isInExibition()) {
      waterAudio.headphonesAvailable().then(function () {
        def.resolve()
      }).catch(function () {
        def.reject()
      });
    } else {
      def.resolve()
    }
    return def.promise;
  };


  //setup initial state and add event listener for unplugged and plugged in headphones
  $ionicPlatform.ready(function () {

    //initial setup
    waterAudio.shouldStartPlayback()
      .then(function () {
        $rootScope.audioAvailable = true
      })
      .catch(function () {
        $rootScope.audioAvailable = false
      });


    if (window.cordova) {
      window.HeadsetDetection.registerRemoteEvents(function (status) {

        $rootScope.$apply(function () {
          switch (status) {
            case 'headsetAdded':
              console.log('Headset was added');
              $rootScope.audioAvailable = true
              break;
            case 'headsetRemoved':
              //stop if media is playing
              MediaManager.stop();
              console.log('Headset was removed');
              $rootScope.audioAvailable = beaconManager.isInExibition() ? false : true;
              break;
          }
        });
      });
    } else {
      $rootScope.audioAvailable = true;
    }
  });

  return waterAudio;
});
