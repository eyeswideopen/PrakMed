angular.module('water').controller('picture_template', function ($scope, waterAudio, MediaManager, $timeout) {





  //
  //IMAGE SLIDER ELEMENT
  //

  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500
  }

  $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
    // note: the indexes are 0-based
    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });


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
    title: 'Audiokommentar zu Bild XX',
    art: 'img/profile.jpg'
  }


  //
  //QUIZ ELEMENT
  //
  $scope.answeredRight = false;
  $scope.answeredWrong = false;
  var quizInteractionActive = true;

  $scope.right = function ($event) {
    if (quizInteractionActive) {
      quizInteractionActive = false;
      $scope.answeredRight = true;
      //jquery styling of buttons
      jQuery(".wrong_answer").each(function () {
        jQuery(this).addClass("disabled");
      });
      jQuery(".right_answer").addClass("button_right_answer");

    }
  };

  $scope.wrong = function ($event) {
    if (quizInteractionActive) {
      quizInteractionActive = false;
      $scope.answeredWrong = true;
      //jquery styling of buttons

      jQuery(".quiz_button").each(function () {

        if (jQuery(this).is(jQuery($event.target))) {
          jQuery($event.target).addClass("button_wrong_answer");
        } else {
          jQuery(this).addClass("disabled");
        }
      });
    }

    //reset display after 5 sec
   $timeout(reset, 5000);
  };

  var reset = function () {
    $scope.$apply(function () {
      $scope.answeredRight = false;
      $scope.answeredWrong = false;
    });
    quizInteractionActive = true;
    jQuery(".quiz_button").each(function () {
      jQuery(this).removeClass("button_wrong_answer");
      jQuery(this).removeClass("disabled");
    });
  }
})
;
