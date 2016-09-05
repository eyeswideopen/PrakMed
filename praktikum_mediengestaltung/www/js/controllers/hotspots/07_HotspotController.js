/**
 * Created by maximiliankorner on 04/09/16.
 */
angular.module('water').controller('07_HotspotController', function ($scope, waterAudio, MediaManager, $timeout) {
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
