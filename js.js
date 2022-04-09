(function ($) {

    $.fn.controlImage = function(){

        const controlImage = $(this);
        var images = $("#container");
        const firstImage = 0;
        var screenLeft = $("#container", this);


        screenLeft.click(evt())({
            firstImage = (images + images - 1) % images;
            $("#container", slideshow)


            
        });



    }



















})(jQuery);