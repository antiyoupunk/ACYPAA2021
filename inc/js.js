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