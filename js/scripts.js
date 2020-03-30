$(document).ready(function(){
  $("form#flavorInput").submit(function(event){
    event.preventDefault();
    var flavorArray = [1,2,3];

    // console.log(flavorA);

    flavorArray.forEach(function(flavor){
      var userInput = $("#flav"+flavor).val();
      $(".answer").append(" " + userInput); 
      // console.log(index);
      // console.log(flavor);
      // console.log($(flavor));
      // console.log(userInput);

    });
    

  });

});


// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

//     console.log(blanks)

//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput);
//     });

//     $("#story").show();

    
//   });
// });