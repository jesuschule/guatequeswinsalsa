/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});


	$( '.swipebox' ).swipebox();
(function($) {
    "use strict"; // Start of use strict

   
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

  
})(jQuery); // End of use strict
