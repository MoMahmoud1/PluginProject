(function ($) {

    $.fn.controlImage = function(){

        const controlImage = $(this);
        var images = $("#container");
        const firstImage = 0;
        var screenLeft = $("#container", this);
        $("#container").click( evt => {
            const link = evt.currentTarget;
            
            const imageURL = $(link).attr("href");
            $("#image").attr("src", imageURL);
            $("#image").fadeOut(1000,()=>{
            $("#image").attr("src", imageURL).fadeIn(1000);
            });		
            
        });



    }

})(jQuery);