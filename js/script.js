$(document).ready(function() {
    $(".design").click(function(){
        $(".design").toggle();
        $(".p1").toggle();
    });
    $(document).ready(function() {
        $(".p1").click(function(){
            $(".p1").toggle();
            $(".design").toggle();
        });

    $(".development").click(function() {
        $(".development").toggle();
        $(".p2").toggle();
    });
    $(".p2").click(function() {
        $(".development").toggle();
        $(".p2").toggle();
    });
    $(".product").click(function() {
        $(".product").toggle();
        $(".p3").toggle();
    });
    $(".D").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      });
      
    $(".B").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
});  

    


