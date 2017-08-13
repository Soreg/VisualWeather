/*
  General animations
*/

/*
  Card animations
*/
// For each card in html..
function fadeCardIn() {
  $.each($('.card'), function(i, el){
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
    $(".clouds .cloud1").animate({"left": "-80px"}, 2500, function() {
        $(this).animate({"left": "-30px"}, 2200)
    })
 setTimeout(cloudy1anim, 4700); // added back
}
// Animate cloud 2
var cloudy2anim = function() {
  $(".clouds .cloud2").animate({"left": "-70px"}, 2500, function() {
      $(this).animate({"left": "-50px"}, 2700)
  })
setTimeout(cloudy2anim, 5200); // added back
}
// Animate cloud 3
var cloudy3anim = function() {
  $(".clouds .cloud3").animate({"left": "-50px"}, 3600, function() {
      $(this).animate({"left": "-70px"}, 4000)
  })
setTimeout(cloudy3anim, 7600); // added back
}

// Run animations
cloudy1anim();
cloudy2anim();
cloudy3anim();
}

/*
  Sunny Card animations
*/
