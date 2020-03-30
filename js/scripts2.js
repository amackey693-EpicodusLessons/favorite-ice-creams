$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split(" ");

    // instantiate a new empty array 
    console.log(sentenceArray);

    sentenceArray.map(function(word){
      // var index = [1,2,3];
      var sort = $("input#sentence"+ word).length(3)); 
         console.log(sort);
    });

    // forEach loop through sentenceArray
      // use simple branching to see if the word.length is greater than 2
        // push to the new array

  });
});