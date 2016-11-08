(function() {
  angular
    .module('MySite')
    .controller('SiteController', SiteController)
    // .element(document).ready(function () {

    function SiteController($scope) {
      var self = this;
      var speed = 0.1;

  //     jQuery(document).ready(function(){
  // /* Show the HTML page only after the js and css are completely loaded */
  //       delayShow();
  //     });
  //
  //     function delayShow() {
  //       var secs = 1000;
  //       setTimeout('jQuery("body").css("visibility","visible");', secs);
  //     }

      // var $scope.init = function() {

      function parallax(){
          var position = $(window).scrollTop();
          $('.container').each(function() {
              var $image = $(this);
              // subtract some from the height b/c of the padding
              var height = $image.height()-500;
              $(this).css('backgroundPosition', '50% ' + Math.round((height - position) * speed) + 'px');
          });
      };

        $(window).on('scroll', parallax);

      // }

      // $timeout($scope.init)

    // $scope.$on('$stateChangeSuccess', function () {
    } //SiteController
    // });
})() //IIFE
