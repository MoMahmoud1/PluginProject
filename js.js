(function ($) {

    $.fn.slider = function (Options) {
        let settings = $.extend(
            {
            fadeOut: 1000,
            fadeIn: 1000,
            time:3000
            },
            Options
        );
    this.each(function () {
        var slideshow = $(this);
    
        var num_slides = $(".slide", this).length;
    
        var current_slide = 0;
    
        var prev_btn = $(".slideshow-control[rel='prev']", this);
        var interval = null;
        prev_btn.click(function () {
    
            current_slide = (current_slide + num_slides - 1) % num_slides;
    
            $(".slide.current", slideshow)
    
            .fadeOut(settings.fadeOut, function () {
    
                $(".slide:eq(" + current_slide + ")", slideshow)
                
                .fadeIn(settings.fadeIn)
    
                .addClass("current");
            })
            .removeClass("current");
        });


    }

})(jQuery);