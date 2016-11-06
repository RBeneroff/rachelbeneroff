(function() {
  angular
    .module('MySite')
    .controller('SiteController', SiteController);

    function SiteController($scope) {
      var self = this;

      var velocity = 0.1;

      function update(){
          var pos = $(window).scrollTop();
          $('.container').each(function() {
              var $element = $(this);
              // subtract some from the height b/c of the padding
              var height = $element.height()-500;
              $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
          });
      };

      $(window).bind('scroll', update);




    } //SiteController
})() //IIFE
