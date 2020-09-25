// Hover on desktop, click on mobile
jQuery(document).ready(function() {  
    function toggleNavbarMethod() {  
        if (jQuery(window).width() > 768) {  
            jQuery('.navbar .dropdown').on('mouseover', function(){  
                jQuery('.dropdown-toggle', this).trigger('click');   
            }).on('mouseout', function(){  
                jQuery('.dropdown-toggle', this).trigger('click').blur();  
            });  
        }  
        else {  
            jQuery('.navbar .dropdown').off('mouseover').off('mouseout');  
        }  
    }  
    toggleNavbarMethod();  
    jQuery(window).resize(toggleNavbarMethod);  
  }); 
  
  function myFunction(x) {
    x.classList.toggle("change");
  }
// End hover/click

// Header slide
$(document).ready(() => {
    $('#slideshow .slick').slick(
        {
            prevArrow: '.arrow-prev',
            nextArrow: '.arrow-next',
            autoplay: false,
            infinite: true,
            dots: false
        }
    );
  });
// End header slide

