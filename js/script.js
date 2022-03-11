$(document).ready(function(){
    $(".design").click(function(){
      $(".design").hide();
      $(".p1").toggle();
      $(".p1").show();
    });

    $(".p1").click(function(){
        $(".p1").hide(1200);
        $(".design").toggle(1200);
        $(".design").show(1200);
      });    
}

)