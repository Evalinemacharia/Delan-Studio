$(document).ready(function() {
    $(".design").click(function(){
        $(".design").toggle();
        $(".p1").toggle();
    });

    $(".development").click(function() {
        $(".development").toggle();
        $(".p1").toggle();
    });
    $(".product").click(function() {
        $(".product").toggle();
        $(".p1").toggle();
    });
    $(".D").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })
});

    


