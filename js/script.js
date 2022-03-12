$(document).ready(function(){
    $(".design ").click(function(){
      $(".design ").hide();
      $(".p1").toggle();
      $(".p1").show();
    });

    $(".p1").click(function(){
        $(".p1").hide(1200);
        $(".design").toggle();
        $(".design").show();
      });    
}

)


//$(".gHover").hover(function() {
  //  $(this).stop().animate({
        t0p: -50
  //  }, 900,"easeOutBounce");
//}, function() {
  //  $(this).stop().animate({
   //     top: 0
   // }, 900, "easeOutBounce");
//});
 


))