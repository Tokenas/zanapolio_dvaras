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

// $(document).on("scroll",function(){
//       if ($(document).scrollTop() > 100){
//         $("logo-png").addClass("smaller");
//       }else {
//         $("logo-png").removeClass("smaller");
//       }
//     });
    

function resizeLogo() {
    /* set after which point you want to change the logo. 
    I set it when the scroll is more than your navbar height but you can set it to a numeric 
    value e.g 100 or bind it to an element by an id */

    // var offset = parseInt($(".navbar").height());
    // var duration = 500;

    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $(".logo-png").addClass("smaller");
        } else {
            if ($(".logo-png").hasClass("smaller")) {
                $(".logo-png").removeClass("smaller");
            }
        }
    });
}

$(document).ready(function() {
    resizeLogo();
});

