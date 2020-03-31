$(document).ready(function(){
  $("form#word-play").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val().split(" ");
    var newSentence = [];

    // var newSentence = words.filter(word => word.length >-3);
    // if you use this ^^ you don't need the following syntax. You can accomplish putting together the newSentence with the syntax listed above. Study this further. 

    sentence.forEach(word => {
      if (word.length >= 3) {
        newSentence.push(word);
      } 
    });

    var reverseSentence = newSentence.reverse().join(" ");
    $(".answer").text(reverseSentence);
  
  });
});