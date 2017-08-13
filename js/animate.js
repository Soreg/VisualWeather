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
function animateCloudy() {
  console.log("Hello World, it's cloudy!");
}
