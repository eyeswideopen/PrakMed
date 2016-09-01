/**
 * Created by maximiliankorner on 01/09/16.
 */

angular.module('water').factory('waterAudio', function($q, beaconManager){

  var waterAudio = {};

  //returns promise and makes async call to cordova plugin to check if headphones are available
  waterAudio.headphonesAvailable = function(){
    var def = $q.defer();
    if (window.cordova) {
      // running on device/emulator -> make call to plugin
      window.HeadsetDetection.detect(function(detected) {detected?def.$resolve():def.reject()});
    } else {
      // running in dev mode just fake headphones
      def.resolve();
    }
    return def.promise;
  };

  //determines if audio should be allowed to be played (if in exibition -> only headphones)
  waterAudio.shouldStartPlayback = function(){
    var def = $q.defer();
    if(beaconManager.isInExibition()){
      waterAudio.headphonesAvailable().then(function(){def.resolve()}).catch(function(){def.reject()});
    }else{
      def.resolve()
    }
    return def.promise;
  };

  return waterAudio;

});
