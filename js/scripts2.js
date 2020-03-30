$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split(" ");
    console.log(sentenceArray);

    sentenceArray.map(function(word){
      // var index = [1,2,3];
      var sort = $("input#sentence"+word.length(3)); 
         console.log(sort);
      
     
    });

  });
});