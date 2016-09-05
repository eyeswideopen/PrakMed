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

  $scope.right = function ($event) {
    if (!jQuery($event.target).hasClass("button_right_answer")) {
      var parent = jQuery($event.target).parent();
      parent.find(".answered_right").show();
      parent.find(".wrong_answer").each(function () {
        jQuery(this).addClass("disabled");
      });
      parent.find(".right_answer").addClass("button_right_answer");

    }
  };

  $scope.wrong = function ($event) {
    if (!jQuery($event.target).hasClass("button_wrong_answer")) {
      var parent = jQuery($event.target).parent();
      parent.find(".answered_wrong").show();
      parent.find(".quiz_button").each(function () {
        if (jQuery(this).is(jQuery($event.target))) {
          jQuery($event.target).addClass("button_wrong_answer");
        } else {
          console.log("added ")

          jQuery(this).addClass("disabled");
        }
      });

      //reset display after 5 sec
      $timeout(reset.bind(null,parent), 4000);
    }

  };

  //resets view after wrong answer and 5 sec wait
  var reset = function (quiz) {
    jQuery(quiz).find(".quiz_button").each(function () {
      jQuery(this).removeClass("button_wrong_answer");
      jQuery(this).removeClass("disabled");
    });
    jQuery(quiz).find(".answered_wrong").hide();
  }

});
