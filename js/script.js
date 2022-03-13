$(document).ready(function() {
    $(".image1, .p1").click(function(){
        $(".p1, image1").toggle(700);
        
    });
    $(".image2 , .p2").click(function(){
        $(".p2, image2").toggle();
        
      });
    $(".image3, .p3").click(function(){
        $(".p3, .image3").toggle();
    
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

    


