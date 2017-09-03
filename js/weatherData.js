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
  editCards(days, data)
}

// Note: This function will assign data to HTML elements, for each day of the week.
// This function may be large. Please provide useful comments where need be.
function editCards(days, data) {
  // Set month names
  var month = ["January ", "February ", "March ", "April ", "May ", "June ",
  "July ", "August ", "September ","October ", "November ", "December "];
  // Set day names
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"];
  // Get date
  var date = new Date();


  // For loop to assign data to every card
  for (var i = 0; i < days.length; i++) {
    // Convert day + month numbers to strings (Using the arrays)
    var dateMonth = month[date.getMonth()];
    var dateDay = day[date.getDay()];
    var dateDate = date.getDate();
    var dateString = dateDay + ", " + dateMonth + dateDate;
    // Check to see weather states
    /* -- CLOUDY -- */
    if (days[i].icon === "partly-cloudy-day" || days[i].icon === "partly-cloudy-night" || days[i].icon === "cloudy") {
      $("#forecastDay" + [i]).addClass("cloudy");
      $("#forecastDay" + [i] + " .data .weatherType").html("Cloudy");
      // Get cloudy animation with index
      animateCloudy(i);
    }
    /* -- SUNNY -- */
    else if (days[i].icon === "clear-day" || days[i].icon === "clear-night") {
      $("#forecastDay" + [i]).addClass("sunny");
      $("#forecastDay" + [i] + " .data .weatherType").html("Sunny");
      // Get sunny animation with index
      animateSunny(i);
    }
    /* -- RAIN -- */
    else if (days[i].icon === "rain") {
      $("#forecastDay" + [i]).addClass("rain");
      $("#forecastDay" + [i] + " .data .weatherType").html("Rain");
      // Get rainy animation with index
      animateRain(i);
    }
    /* -- SNOW -- */
    else if (days[i].icon === "snow" || days[i].icon === "sleet") {
      $("#forecastDay" + [i]).addClass("snow");
      $("#forecastDay" + [i] + " .data .weatherType").html("Snow");
      animateSnow(i);
    }
    /* -- WINDY -- */
    else if (days[i].icon === "wind") {
      $("#forecastDay" + [i]).addClass("windy");
      $("#forecastDay" + [i] + " .data .weatherType").html("Windy");
      animateWindy(i);
    }
    /* -- FOG -- */
    else {
      $("#forecastDay" + [i]).addClass("fog");
      $("#forecastDay" + [i] + " .data .weatherType").html("Foggy");
      // Get foggy animation with index
      animateFog(i);
    }

    // Add data to all cards
    var units = data.flags.units;
    if (units == "us") {
      $("#forecastDay" + [i] + " .data .degrees").html(days[i].apparentTemperatureMax + "°F");
    } else {
      $("#forecastDay" + [i] + " .data .degrees").html(days[i].apparentTemperatureMax + "°C");
    }
    date.setDate(date.getDate() + 1);
    $("#forecastDay" + [i] + " .data .date").html(dateString);
    $("#forecastDay" + [i] + " .pullDown .summary").html(days[i].summary);
    $("#forecastDay" + [i] + " .pullDown .cloudCover").html((days[i].cloudCover * 100).toFixed(2) + "%");
    $("#forecastDay" + [i] + " .pullDown .windSpeed").html(days[i].windSpeed);
    $("#forecastDay" + [i] + " .pullDown .humidity").html((days[i].humidity * 100).toFixed(2) + "%");
    $("#forecastDay" + [i] + " .pullDown .dewPoint").html(days[i].dewPoint.toFixed(2));
  }

  // Animate cards in
  fadeCardIn();

} // end of editCards
