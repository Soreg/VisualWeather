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
  $("#forecastDay" + [i]).prepend("<div class='cloudy cloud1'></div>");

  // Animate cloud 1
  var cloudy1anim = function() {
    $(".cloudy .cloud1").animate({"left": "-80px"}, 2000, function() {
        $(this).animate({"left": "-30px"}, 1500)
    })
 setTimeout(cloudy1anim, 3500); // added back
}
cloudy1anim();
}

/*
  Sunny Card animations
*/
