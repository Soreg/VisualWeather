// On document ready
$( document ).ready(function() {

  $("#city input").on("keydown",function name(e) {
      // If user hits enter on city name
      if(e.keyCode == 13) {
        var city = this.value;
        $("#city").fadeTo("slow", 0, function() {
          //Call API
          $.ajax({
          url: 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + city, // The URL to the API. You can get this in the API page of the API you intend to consume
          type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
          data: {}, // Additional parameters here
          dataType: 'json',
          success: function(data) {
            // Assign city, latitude and longitude
            if (data.Results === null || data.Results.length === 0) {
              invalidCity(city);
            } else {
              city = data.Results[0].name;
              var lat = data.Results[0].lat;
              var lon = data.Results[0].lon;
              // Send latitude + longitude to weatherData function
              weatherData(lat, lon);
              // Assign city name to #city, and fade in
              $("#city").css("font-style", "italic");
              $("#city").html("<h1>" + city + "</h1>");
              $("#city").fadeTo("slow", 1);
            }
          },
          error: function(err) {
            // Give error message if JSON is unresponsive
            $("#city input").val('');
            $("#city .errorMessage").html("Json not responding - Please try again");
            $("#city").fadeTo("slow", 1);
          },
          beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "hIA7KbXmyimshEpxfXEDDkX0MipSp1SNNp7jsnH900YQMh7Jts"); // Enter here your Mashape key
          }
          });
        });

        // Invalid city input
        function invalidCity(city) {
          $("#city input").val('');
          $("#city .errorMessage").html("The city " + '"' + city + '"' + " could not be found. Please check your spelling, or choose another city.");
          // Fade in inputs
          $("#city").fadeTo("slow", 1);
        }
      }
  });

});
