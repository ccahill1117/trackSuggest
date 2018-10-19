$(document).ready(function(){


  //   $("button#takeQuiz").click(function() {
  //     $("form#trackSubmit").show();
  // });

  var addScores = function(no1, no2, no3, no4, no5) {
    return no1 + no2 + no3 + no4 + no5;
  };

  $("form#trackSubmit").submit(function(event) {
    var userName = $("#userName").val();
    var day = parseInt($("#dayQuestion").val());
    var clas = $("#classQuestion").val();
    var meal = $("#mealQuestion").val();
    var continent = $("#continentQuestion").val();
    var player = $("#playerQuestion").val();
    var dayScore;
    var clasScore;
    var mealScore;
    var continentScore;



    // console.log(userName, day, clas, meal, continent, player);

    if (clas === 'Art') {
      (clasScore = 5);
    } else if (clas === 'Science') {
      (clasScore = 2);
    } else {
      (clasScore = 0);
    }

    if (day >= 50) {
      (dayScore = 5);
    } else {
      (dayScore = 1);
    }

    if (meal === 1) {
      (mealScore = 1);
    } else {
      (mealScore = 0);
    }

    if (continent === 2) {
        (continentScore = 2);
    } else {
      (continentScore = 0);
    }

    if (player > 15) {
      (playerScore = 5);
    } else if (player <= 15 && player >= 12) {
      (playerScore = 2);
    } else if (player < 12 && player > 0) {
      (playerScore = 1);
    } else {
      (playerScore = 0);
    }


    var userScore = addScores(dayScore, clasScore, mealScore, continentScore, playerScore);



    if (userScore >= 14) {
      (course = "Ruby/React Nice Job, you're gonna do great ;-)");
    }
    else if (userScore >=8) {
      (course = "CSS/Design alright good work");
    }
    else {
      (course = "C#/.NET uh oh try again next time :-(");
    }


    $("#userResult").text(course);
    $("#userNameOut").text(userName);

    console.log(userScore);


    event.preventDefault();

  });
});







//var bgColor = $("#color").val();
