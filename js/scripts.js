$(document).ready(function(){


  //   $("button#takeQuiz").click(function() {
  //     $("form#trackSubmit").show();
  // });

  $("form#trackSubmit").submit(function(event) {
    var day = parseInt($("#dayQuestion").val());
    var clas = $("#classQuestion").val();
    var meal = $("#mealQuestion").val();
    var continent = $("#continentQuestion").val();
    var player = $("#playerQuestion").val();

    console.log(day, clas, meal, continent, player);

    event.preventDefault();

  });
});







//var bgColor = $("#color").val();
