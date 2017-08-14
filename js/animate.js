/*
  General animations
*/

/*
  Card animations
*/
// For each card in html..
function fadeCardIn() {
  $.each($('.card, .poweredBy'), function(i, el){
      setTimeout(function(){
        // Remove display:none
        $(el).show();
         $(el).animate({
           // Animate opacity in
           'opacity': '1'
           // Opacity animation time
        }, 600);
        // Timeout function - difference in time between cards
      },500 + ( i * 300 ));
  });
};

/*
  Cloudy Card animations
*/
function animateCloudy(i) {
  // target .data to make clouds
  $("#forecastDay" + [i]).prepend("<div class='clouds'><div class='cloud1'></div><div class='cloud2'></div><div class='cloud3'></div></div>");

  // Animate cloud 1
  var cloudy1anim = function() {
    $(".cloudy .clouds .cloud1").animate({left: "-80px"}, 2500, function() {
        $(this).animate({left: "-30px"}, 2200)
    })
 setTimeout(cloudy1anim, 4700);
}
// Animate cloud 2
var cloudy2anim = function() {
  $(".cloudy .clouds .cloud2").animate({"left": "-70px"}, 2500, function() {
      $(this).animate({left: "-50px"}, 2700)
  })
setTimeout(cloudy2anim, 5200);
}
// Animate cloud 3
var cloudy3anim = function() {
  $(".cloudy .clouds .cloud3").animate({left: "-50px"}, 3600, function() {
      $(this).animate({left: "-70px"}, 4000)
  })
setTimeout(cloudy3anim, 7600);
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
  $("#forecastDay" + [i]).prepend("<div class='sun'></div>");
  // Animate sun
  var sunnyanim = function() {
    $(".sun").animate({width: "80px", height: "80px"}, 1500, function() {
        $(this).animate({width: "110px", height: "110px"}, 3000)
    })
 setTimeout(sunnyanim, 4500);
}
// Sunny animations
sunnyanim();

}


/*
  Rainy Card animations
*/
function animateRain(i) {
  $("#forecastDay" + [i]).prepend("<div class='clouds'><div class='cloud1'></div><div class='cloud2'></div></div><div class='rainy'></div>");

  // Animate cloud 1
  var rainy1anim = function() {
    $(".rain .clouds .cloud1").animate({left: "-50px"}, 3500, function() {
        $(this).animate({left: "-60px"}, 3000)
    })
 setTimeout(rainy1anim, 6500);
}
// Animate cloud 2
var rainy2anim = function() {
  $(".rain .clouds .cloud2").animate({"left": "-70px"}, 2500, function() {
      $(this).animate({left: "-50px"}, 2700)
  })
setTimeout(rainy2anim, 5200);
}
// Rainy animations
rainy1anim();
rainy2anim();
}
