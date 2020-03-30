$(document).ready(function(){
  $("form#flavorInput").submit(function(event){
    event.preventDefault();
    var flavorArray = [1,2,3];

    // console.log(flavorA);

    flavorArray.forEach(function(flavor){
      var userInput = $("#flav"+flavor).val();
      $(".answer").append(" " + userInput); 
    

    }); 

  // });

});
