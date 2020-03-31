$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val().split(" ");
    var newSentence = [];

    sentence.forEach(word => {
      if (word.length >= 3) {
        newSentence.push(" " + word);
      } 
    });

    $(".answer").text(newSentence + " I'm not sure" + " , it appears it does")
    console.log(newSentence)
  });
});