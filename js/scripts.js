$(document).ready(function() {

  $("form#colorForm").submit(function() {
    var bgColor = $("#color").val();
    $("body").css("background-color", bgColor);
    $("section").css("background-color", bgColor);
    event.preventDefault();
  });

  $("form#colorFontForm").submit(function() {
    var fontColor = $("#fontColor").val();
    $("body").css("color", fontColor);
    $("section").css("color", fontColor);
    event.preventDefault();
  });

  $("button#takeQuiz").click(function() {
    $("form#trackSubmit").show();
    $("button#removeSurvey").show();
  });

  $("button#removeSurvey").click(function() {
    $("form#trackSubmit").hide();
    $("button#removeSurvey").hide();
    $(".fancyOutput2").hide();
    $(".fancyOutput").hide();
  });

  var addScores = function(no1, no2, no3, no4, no5) {
    return no1 + no2 + no3 + no4 + no5;
  };

  // $("li#dameImg").click(function() {
  //   $("#show").toggle();
  //   $("#hide").toggle();
  // });

  $("form#trackSubmit").submit(function(event) {
    var userName = $("#userName").val();
    var day = $("#dayQuestion").val();
    var clas = $("#classQuestion").val();
    var meal = $("#mealQuestion").val();
    var continent = $("#continentQuestion").val();
    var player = $("#playerQuestion").val();
    var dayScore;
    var clasScore;
    var mealScore;
    var continentScore;
    // $(".fancyOutput").hide();
    $(".fancyOutput2").hide();
    $(".fancyOutput4").hide();

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
      (course = "Ruby/React");
    }
    else if (userScore >=8) {
      (course = "CSS/Design");
    }
    else {
      (course = "C#/.NET");
    }

    if (userName === "") {
      $(".fancyOutput2").fadeIn();
      $("h6#ifError").css({"color" : "red" , "font-weight" : "bolder", "font-size" : "3rem"});
    }
    else if (day === "Favorite day") {
      $(".fancyOutput4").fadeIn();
      $("h6#ifError").css({"color" : "black", "font-weight" : "normal", "font-size" : "1rem"});
    }
    else if (clas === "🎨  or 🔬") {
      $(".fancyOutput4").fadeIn();
      $("h6#ifError").css({"color" : "black", "font-weight" : "normal", "font-size" : "1rem"});
    }
    else if (meal === "Favorite meal") {
      $(".fancyOutput4").fadeIn();
      $("h6#ifError").css({"color" : "black", "font-weight" : "normal", "font-size" : "1rem"});
    }
    else if (player === "Favorite player") {
      $(".fancyOutput4").fadeIn();
      $("h6#ifError").css({"color" : "black", "font-weight" : "normal", "font-size" : "1rem"});
    }
    else {
      $("#userResult").text(course);
      $("#userNameOut").text(userName);
      $(".fancyOutput").fadeIn();
      $(".fancyOutput4").hide();
      $(".fancyOutput2").hide();
      $("h6#ifError").css({"color" : "black", "font-weight" : "normal", "font-size" : "1rem"});
    }

    //added final else logic and that fixed the gh-pages issue...

    // console.log(day, clas, meal, continent, player);
    event.preventDefault();

  });
});







//var bgColor = $("#color").val();
