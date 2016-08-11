/**
 * Created by maximiliankorner on 11/08/16.
 */
angular.module('prakMed').factory('beaconManager', function($cordovaBeacon){

  var beaconManager = {};

  //SETUP BEACONS

  var brIdentifier = 'estimote';
  var brUuid = 'b9407f30-f5f8-466e-aff9-25556b57fe6d';
  var brMajor = null;
  var brMinor = null;
  var brNotifyEntryStateOnDisplay = false;

  $ionicPlatform.ready(function () {

    $scope.didStartMonitoringForRegionLog = '';
    $scope.didDetermineStateForRegionLog = '';
    $scope.didRangeBeaconsInRegionLog = '';

    $scope.requestAlwaysAuthorization = function() {
      $cordovaBeacon.requestAlwaysAuthorization();
    };

    $scope.startMonitoringForRegion = function() {
      $cordovaBeacon.startMonitoringForRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };
    $scope.startRangingBeaconsInRegion = function() {
      $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };

    $scope.stopMonitoringForRegion = function() {
      $cordovaBeacon.stopMonitoringForRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };
    $scope.stopRangingBeaconsInRegion = function() {
      $cordovaBeacon.stopRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };

    $scope.clearLogs = function() {
      $scope.didStartMonitoringForRegionLog = '';
      $scope.didDetermineStateForRegionLog = '';
      $scope.didRangeBeaconsInRegionLog = '';
    };

    // ========== Events

    $rootScope.$on("$cordovaBeacon:didStartMonitoringForRegion", function (event, pluginResult) {

      for(var i = 0; i < pluginResult.beacons.length; i++) {
        //do something with the beacons recognized
      }

        $scope.didStartMonitoringForRegionLog += '-----' + '\n';
      $scope.didStartMonitoringForRegionLog += JSON.stringify(pluginResult) + '\n';
    });

    $rootScope.$on("$cordovaBeacon:didDetermineStateForRegion", function (event, pluginResult) {
      $scope.didDetermineStateForRegionLog += '-----' + '\n';
      $scope.didDetermineStateForRegionLog += JSON.stringify(pluginResult) + '\n';
    });

    $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function (event, pluginResult) {
      $scope.didRangeBeaconsInRegionLog += '-----' + '\n';
      $scope.didRangeBeaconsInRegionLog += JSON.stringify(pluginResult) + '\n';
    });

    // =========/ Events

  });


  return beaconManager;

});
