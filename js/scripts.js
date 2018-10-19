$(document).ready(function(){


    $("button#takeQuiz").click(function() {
      $("form#trackSubmit").show();
  });

  $("form#trackSubmit").submit(function(event) {
    var userName = $("#userName").val();
    var day = parseInt($("#dayQuestion").val());
    var clas = $("#classQuestion").val();
    var meal = $("#mealQuestion").val();
    var continent = $("#continentQuestion").val();
    var player = $("#playerQuestion").val();
    var userResponse;

    // console.log(userName, day, clas, meal, continent, player);

    if (day >= 50) {

    }

    event.preventDefault();

  });
});







//var bgColor = $("#color").val();
