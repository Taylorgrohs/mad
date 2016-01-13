$(document).ready(function(){
  $("#blank form").submit(function(event){
    var blanks = ["person1", "person2", "animal", "verb", "noun", "exclamation"]

    for(var index= 0; index < blanks.length; index++) {
      var userInput = $("input#" + blanks[index]).val();
      $("." + blanks[index]).text(userInput);
    };
    /*blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    })*/


    $("#story").show();
    event.preventDefault();
  });
});
