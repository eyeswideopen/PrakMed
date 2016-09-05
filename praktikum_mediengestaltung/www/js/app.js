angular.module('water', ['ionic', 'ngCordova', 'ionic-audio'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'menuController'
      })


      .state('app.live', {
        url: '/live',
        views: {
          'menuContent': {
            templateUrl: 'templates/picture_template.html',
            controller: 'picture_template'
          }
        }
      })
      .state('app.gallery', {
        url: '/gallery',
        views: {
          'menuContent': {
            templateUrl: 'templates/gallery.html',
            controller: 'galleryController'
          }
        }
      })
      .state('app.impressum', {
        url: '/impressum',
        views: {
          'menuContent': {
            templateUrl: 'templates/impressum.html',
            controller: 'impressumController'
          }
        }
      })

      .state('app.01', {
        url: '/01',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/01_Hotspot.html',
            controller: '01_HotspotController'
          }
        }
      })

      //hotspots
      .state('app.02', {
        url: '/02',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/02_Hotspot.html',
            controller: '02_HotspotController'
          }
        }
      })
      .state('app.03', {
        url: '/03',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/03_Hotspot.html',
            controller: '03_HotspotController'
          }
        }
      })
      .state('app.04', {
        url: '/04',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/04_Hotspot.html',
            controller: '04_HotspotController'
          }
        }
      })
      .state('app.05', {
        url: '/05',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/05_Hotspot.html',
            controller: '05_HotspotController'
          }
        }
      })
      .state('app.06', {
        url: '/06',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/06_Hotspot.html',
            controller: '06_HotspotController'
          }
        }
      })
      .state('app.07', {
        url: '/07',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/07_Hotspot.html',
            controller: '07_HotspotController'
          }
        }
      })
      .state('app.08', {
        url: '/08',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/08_Hotspot.html',
            controller: '08_HotspotController'
          }
        }
      })
      .state('app.09', {
        url: '/09',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/09_Hotspot.html',
            controller: '09_HotspotController'
          }
        }
      })
      .state('app.10', {
        url: '/10',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/10_Hotspot.html',
            controller: '10_HotspotController'
          }
        }
      })
      .state('app.11', {
        url: '/11',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/11_Hotspot.html',
            controller: '11_HotspotController'
          }
        }
      })
      .state('app.12', {
        url: '/12',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/12_Hotspot.html',
            controller: '12_HotspotController'
          }
        }
      })
      .state('app.13', {
        url: '/13',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/13_Hotspot.html',
            controller: '13_HotspotController'
          }
        }
      })
      .state('app.14', {
        url: '/14',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/14_Hotspot.html',
            controller: '14_HotspotController'
          }
        }
      })
      .state('app.15', {
        url: '/15',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/15_Hotspot.html',
            controller: '15_HotspotController'
          }
        }
      })
      .state('app.16', {
        url: '/16',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/16_Hotspot.html',
            controller: '17_HotspotController'
          }
        }
      })
      .state('app.17', {
        url: '/17',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/17_Hotspot.html',
            controller: '17_HotspotController'
          }
        }
      })
      .state('app.18', {
        url: '/18',
        views: {
          'menuContent': {
            templateUrl: 'templates/hotspots/18_Hotspot.html',
            controller: '18_HotspotController'
          }
        }
      });





    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/02');
  });
