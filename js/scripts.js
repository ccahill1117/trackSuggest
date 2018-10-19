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
    var userScore;
    var dayScore;
    var clasScore;
    var mealScore;
    var continentScore;

    var addScores = function(no1, no2, no3, no4, no5) {
      return no1 + no2 + no3 + no4 + no5;
    };


    // console.log(userName, day, clas, meal, continent, player);

    if (clas === 'Art') {
      (clasScore = 5);
    } else if (clas === 'Science') {
      (clasScore = 2);
    } else { }

    if (day >= 50) {
      (dayScore = 5);
    } else {
      (dayScore = 1);
    }

    if (meal = 1) {
      (mealScore = 1)
    } else {
      (mealScore = 0);
    }

    

    console.log(userScore);

    event.preventDefault();

  });
});







//var bgColor = $("#color").val();
