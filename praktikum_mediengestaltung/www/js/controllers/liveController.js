angular.module('prakMed').controller('liveController', function ($scope) {



  //AUDIO PLAYER CONFIG
  $scope.myTrack = {
    url: 'audio/Hotspot_05_Audio_Geduld_edit.mp3',
    artist: 'Somebody',
    title: 'Song name',
    art: 'img/album_art.jpg'
  }


  //IMAGE SLIDER CONFIG
  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });


});
