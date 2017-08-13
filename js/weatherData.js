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

  // Day 1
  var day0 = data.daily.data[0];
  var day1 = data.daily.data[1];
  var day2 = data.daily.data[2];
  var day3 = data.daily.data[3];
  var day4 = data.daily.data[4];
  var day5 = data.daily.data[5];
  var day6 = data.daily.data[6];
  var day7 = data.daily.data[7];


  // Send daily data to EditCards
  editCards(day0,day1,day2,day3,day4,day5,day6,day7)
}

function editCards(day0,day1,day2,day3,day4,day5,day6,day7) {
  console.log(day3);
}
