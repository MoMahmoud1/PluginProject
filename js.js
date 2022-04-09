(function ($) {

    $.fn.controlImage = function(){

        const controlImage = $(this);
        var images = $("#container");
        const firstImage = 0;
        screenLeft.click(evt())({
            firstImage = (firstImage + images-1) % images;
           $("#container",controlImage).fadeOut("1000");

            
        });



    }



















})(jQuery);