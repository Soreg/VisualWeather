/*
  General animations
*/

/*
  Card animations
*/

// For each card in html..
function fadeCardIn() {
  $.each($('.card, .poweredBy'), function (i, el) {
    console.log(el);

    setTimeout(function () {
      // Remove display:none
      $(el).show();
      $(el).animate({
        // Animate opacity in
        'opacity': '1'
        // Opacity animation time
      }, 600);
      // Timeout function - difference in time between cards
    }, 500 + (i * 300));
  });
};

/*
  Cloudy Card animations
*/
function animateCloudy(i) {
  // target .data to make clouds
  $("#forecastDay" + [i]).prepend("<div id='prepended' class='clouds'><div class='cloud1'></div><div class='cloud2'></div><div class='cloud3'></div></div>");

  // Animate cloud 1
  var cloudy1anim = function () {
    $(".cloudy .clouds .cloud1")
      .animate({ left: "-80px" }, 2500)
      .animate({ left: "-30px" }, 2200, cloudy1anim);
  }

  // Animate cloud 2
  var cloudy2anim = function () {
    $(".cloudy .clouds .cloud2")
      .animate({ left: "20px" }, 2500)
      .animate({ left: "50px" }, 2700, cloudy2anim);
  }

  // Animate cloud 3
  var cloudy3anim = function () {
    $(".cloudy .clouds .cloud3")
      .animate({ left: "50px" }, 3600)
      .animate({ left: "40px" }, 4000, cloudy3anim);
  }

  // Cloudy animations
  cloudy1anim();
  cloudy2anim();
  cloudy3anim();
}

/*
  Sunny Card animations
*/
function animateSunny(i) {
  // Create sun
  $("#forecastDay" + [i]).prepend("<div id='prepended' class='sun'></div>");
  // Animate sun
  var sunnyanim = function () {
    $(".sun")
      .animate({ width: "70px", height: "70px" }, 5000)
      .animate({ width: "110px", height: "110px" }, 5000, sunnyanim);
  }
  // Sunny animations
  sunnyanim();

}


/*
  Rainy Card animations
*/
function animateRain(i) {
  $("#forecastDay" + [i]).prepend("<div id='prepended' class='clouds'><div class='cloud1'></div><div class='cloud2'></div></div><div class='rainy'></div>");

  // Animate cloud 1
  var rainy1anim = function () {
    $(".rain .clouds .cloud1")
      .animate({ left: "-50px" }, 3500)
      .animate({ left: "-60px" }, 3000, rainy1anim);
  }
  // Animate cloud 2
  var rainy2anim = function () {
    $(".rain .clouds .cloud2")
      .animate({ left: "60px" }, 2500)
      .animate({ left: "40px" }, 2700, rainy2anim);
  }
  // Rainy animations
  rainy1anim();
  rainy2anim();
  // Run startRain animation once cards are loaded in
  setTimeout(
    function () {
      startRain("#forecastDay" + [i]);
    }, 1500);
}

/*
  Foggy
*/
function animateFog(i) {
  $("#forecastDay" + [i]).prepend("<div id='prepended' class='sun'></div><div class='clouds'><div class='cloud1'></div><div class='cloud2'></div></div>");

  // Animate cloud 1
  var foggy1anim = function () {
    $(".fog .clouds .cloud1")
      .animate({ left: "-50px" }, 3500)
      .animate({ left: "-60px" }, 3000, foggy1anim);
  }
  // Animate cloud 2
  var foggy2anim = function () {
    $(".fog .clouds .cloud2")
      .animate({ left: "-70px" }, 2500)
      .animate({ left: "-50px" }, 2700, foggy2anim);
  }
  // Foggy animations
  foggy1anim();
  foggy2anim();
}

/*
  Windy
*/
function animateWindy(i) {
  $("#forecastDay" + [i]).prepend("<div id='prepended' class='clouds'><div class='cloud1'></div><div class='cloud2'></div><div class='cloud3'></div>");

  // Animate cloud 1
  var windy1anim = function () {
    $(".windy .clouds .cloud1")
      .animate({ left: "-200" }, 1000)
      .animate({ left: "-100" }, 1000, windy1anim);
  }
  // Animate cloud 2
  var windy2anim = function () {
    $(".windy .clouds .cloud2")
      .animate({ left: "-70" }, 500)
      .animate({ left: "-50" }, 700, windy2anim);
  }
  // Animate cloud 3
  var windy3anim = function () {
    $(".windy .clouds .cloud3")
      .animate({ left: "-50px" }, 800)
      .animate({ left: "-70px" }, 1200, windy3anim);
  }
  // Foggy animations
  windy1anim();
  windy2anim();
  windy3anim();
}

/*
  Snow
*/
function animateSnow(i) {
  $("#forecastDay" + [i]).prepend("<div id='prepended' class='clouds'><div class='cloud1'></div><div class='cloud2'></div>");

  var snowAnim = function () {
    $(".snow").snowfall();
    $(".snow").snowfall({ flakeCount: 10, maxSpeed: 10 });
  }
  snowAnim();
}

$(".forecastDay").hover(function () {
  // Detect with of screen
  var screenWidth = $("body").width();
  // Default values
  var cloudHeight = "385px";
  var sunMargin = "110px";
  // Set height of animated elements based on width of screen
  if (screenWidth <= 991) {
    cloudHeight = "450px";
    sunMargin = "140px";
  } else if (screenWidth <= 1199) {
    cloudHeight = "390px";
    sunMargin = "130px";
  }
  $(".sun", this).css("margin-top", sunMargin);
  $(".clouds .cloud1", this).css("height", cloudHeight);
  $(".pullDown", this).css("opacity", "1");
}, function () {
  $(".sun", this).css("margin-top", "0");
  $(".clouds .cloud1", this).css("height", "200px");
  $(".pullDown", this).css("opacity", "0");
});
