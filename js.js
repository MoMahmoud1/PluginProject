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
  
        var prevuse_click = $(".slideshow-control[rel='prev']", this);
        var interval = null;
        prevuse_click.click(function () {
  
          current_slide = (current_slide + num_slides - 1) % num_slides;
  
          $(".slide.current", slideshow)
  
            .fadeOut(settings.fadeOut, function () {
  
              $(".slide:eq(" + current_slide + ")", slideshow)
              
                .fadeIn(settings.fadeIn)
  
                .addClass("current");
            })
            .removeClass("current");
        });
  
        var next_click = $(".slideshow-control[rel='next']", this);
  
        next_click.click(function () {
          current_slide = (current_slide + num_slides + 1) % num_slides;
          $(".slide.current", slideshow)
            .fadeOut(settings.fadeOut, function () {
              $(".slide:eq(" + current_slide + ")", slideshow)
                .fadeIn(settings.fadeIn)
  
                .addClass("current");
            })
  
            .removeClass("current");
        });
        var auto = $(".auto-control[rel='auto']", this);
        auto.click(function () {
          // for(let i = 0; i < num_slides; i++){
          //   const nextImage = num_slides[current_slide];
  
          //     $(".slide", slideshow)
  
          //     .fadeOut(settings.fadeOut, function () {
  
          //       $(".slide:eq(" + nextImage + ")", slideshow)
  
          //       .fadeIn(settings.fadeIn)
  
          //       .addClass("current");
          //     })
  
          //     .removeClass("current");
  
          // }
  
          interval =  setInterval(() => {
            current_slide = (current_slide + num_slides + 1) % num_slides;
            $(".slide.current", slideshow)
  
              .fadeOut(settings.fadeOut, function () {
  
                $(".slide:eq(" + current_slide + ")", slideshow)
                  .fadeIn(settings.fadeIn)
  
                  .addClass("current");
              })
  
              .removeClass("current");
          });
        }, settings.time);
  
        var stop = $(".puse-control[rel='puse']", this);
  
        stop.click(function() {
  
          clearInterval(interval);
        })
  
      });
  
    };
  })(jQuery);
  