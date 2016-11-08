(function() {
  angular
    .module('MySite')
    .controller('SiteController', SiteController)
    // .element(document).ready(function () {

    function SiteController($scope) {
      var self = this;
      var velocity = 0.1;

      // var $scope.init = function() {

      function update(){
          var position = $(window).scrollTop();
          $('.container').each(function() {
              var $element = $(this);
              // subtract some from the height b/c of the padding
              var height = $element.height()-500;
              $(this).css('backgroundPosition', '50% ' + Math.round((height - position) * velocity) + 'px');
          });
      };

        $(window).bind('scroll', update);

      // }

      // $timeout($scope.init)

    // $scope.$on('$stateChangeSuccess', function () {

    } //SiteController
    // });
})() //IIFE
