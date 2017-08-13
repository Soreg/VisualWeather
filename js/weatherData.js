function weatherData(lat, lon) {
  $.ajax({
   type: 'GET',
   dataType: 'jsonp',
   data: {},
   url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b1771da80a45a69cc2fcaf3cdbe9ab1a/' + lat + ',' + lon + '?&units=auto',
   dataType: "json",
   success: function (data) {
     processData(data);
   }
 });
}

function processData(data) {
  // Assign data
  var weeklySummary = data.daily.summary;
  $("#weeklySummary").html(weeklySummary).fadeTo("slow", 1);

// Assign daily infomation to array
var days = [
  data.daily.data[0],
  data.daily.data[1],
  data.daily.data[2],
  data.daily.data[3]
]

  // Send daily data to EditCards
  editCards(days)
}

// Note: This function will assign data to HTML elements, for each day of the week.
// This function may be large. Please provide useful comments where need be.
function editCards(days) {
  // For loop to assign data to every card
  for (var i = 0; i < days.length; i++) {
    // Check to see weather states
    /* -- CLOUDY -- */
    if (days[i].icon === "partly-cloudy-day" || days[i].icon === "partly-cloudy-night" || days[i].icon === "cloudy") {

    }
    /* -- SUNNY -- */
    else if (days[i].icon === "clear-day" || days[i].icon === "clear-night") {

    }
    /* -- RAIN -- */
    else if (days[i].icon === "rain") {
      
    }
    /* -- SNOW -- */
    else if (days[i].icon === "snow" || days[i].icon === "sleet") {

    }
    /* -- WINDY -- */
    else if (days[i].icon === "wind") {

    }
    /* -- FOG -- */
    else {

    }
  }
}
