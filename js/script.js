//function to toggle between the icons and the text
$(document).ready(function(){
    
    $(".btn_1").click(function(){ 
        $("p.par_1").show();
        $(".btn_1").hide(); 
    });
    $("p.par_1").click(function(){
        $("p.par_1").hide();
        $(".btn_1").show(); 
    });
     $(".btn_2").click(function(){
         $("p.par_2").show();   
         $(".btn_2").hide();
     });
     $("p.par_2").click(function(){
         $("p.par_2").hide();
         $(".btn_2").show();
     });
     $(".btn_3").click(function(){
         $("p.par_3").show();   
         $(".btn_3").hide();
     });
     $("p.par_3").click(function(){
         $(".btn_3").show();
         $("p.par_3").hide();
     }); 
  });

  $("#port2").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port3").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port1").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port4").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port5").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port6").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port7").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#port8").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});



$("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hey " + name + ", Thanks for contacting us, we'll get back to you once we see your message!");
    }
    else {
        alert("YOU NAME AND PASSWORD IS INCORRECT PUT THE CORRECT INFORMATION AND RETRY AGAIN!");
    }

});