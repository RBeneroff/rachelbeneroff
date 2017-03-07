(function() {
  angular
    .module('MySite')
    .controller('SiteController', SiteController);

    function SiteController($scope) {
      // var self = this;
      // var speed = 0.1;
      //
      // function parallax(){
      //     var position = $(window).scrollTop();
      //     $('.container').each(function() {
      //         var $image = $(this);
      //         // subtract some from the height b/c of the padding
      //         var height = $image.height()-500;
      //         $(this).css('backgroundPosition', '50% ' + Math.round((height - position) * speed) + 'px');
      //     });
      // }
      //
      //   $(window).on('scroll', parallax);

      $(document).ready(function() {
      $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});

    } //SiteController

})(); //IIFE
