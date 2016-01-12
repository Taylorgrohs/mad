$(document).ready(function(){
  $("form").submit(function(event){
    var person1= $("input#person1").val();
    var person2= $("input#person2").val();
    var animal= $("input#animal").val();
    var verb= $("input#verb").val();
    var noun= $("input#noun").val();
    var exclamation= $("input#exclamation").val();

    $(".person1").text(person1);
    $(".person2").text(person2);
    $(".animal").text(animal);
    $(".verb").text(verb);
    $(".noun").text(noun);
    $(".exclamation").text(exclamation);


    $("#story").show();
    event.preventDefault();
  });
});
