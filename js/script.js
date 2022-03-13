$(document).ready(function() {
    $(".design1").click(function(){
        $(".design").toggle();
        $(".p1").toggle();
    });
    $(".development2").click(function(){
        $(".development").toggle();
        $(".p2").toggle();
      });
    $(".product2").click(function(){
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
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email  == ""|| message  ==""){
      alert("Please fill the form!");
       return false;
    }
    else{
      alert (name + ",thank you for contacting us.");
          }
    } 

    


