var navOpen = true;
$(function(){
    navToggle();

});

function navToggle(){
    navOpen = !navOpen;
    $(".rotate-out, .rotate-in").removeClass("rotate-out").removeClass("rotate-in");
    if(navOpen){
        $("#PrimaryNav").addClass("show-nav")
        $(".is-plus").addClass("rotate-in")
    }else{
        $("#PrimaryNav").removeClass("show-nav")
        $(".is-plus").addClass("rotate-out")
    }
}
window.onscroll = function(){doParalax()};
function doParalax(){
    var scrollBackgroundY = (80 - ($("html").scrollTop()/7));
    $("body").css('background-position-y', scrollBackgroundY);
    
}
function scrollToContent(contentID){
    $('html').animate({scrollTop: $('#'+contentID).offset().top - 10},400);
    navToggle();
}