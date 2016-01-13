$(document).ready(function(){
  $("#blank form").submit(function(event){
    var blanks = ["person1", "person2", "animal", "verb", "noun", "exclamation"]

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });


    $("#story").show();
    event.preventDefault();
  });
});
