// On document ready
$(document).ready(function () {

  // fetch languages from pre-defined languages
  var languages = getLanguages();

  // Populate dropdown of languages
  var $dropdown = $("#languageSelect");
  languages.forEach(function(index) {
    $dropdown.append($("<option />").val(index.language.value).text(index.language.name));
  });
  

  $("#city input").on("keydown", function (e) {
    var city = this.value;
    // get selected language (default)
    var languageSelected = $dropdown.val();
    var key = e.keyCode;
    searchCity(key, city, languageSelected);
  })
});

function searchCity(e, city, languageSelected) {
  if (e == 13) {
    ResetCards();
    $("#city").fadeTo("slow", 0, function () {
      //Call API
      $.ajax({
        url: 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + city, // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function (data) {
          if (data.Results === null || data.Results.length === 0) {
            invalidCity(city);
          } else {
            // Assign city, latitude and longitude
            city = data.Results[0].name;
            var lat = data.Results[0].lat;
            var lon = data.Results[0].lon;

            // Send latitude + longitude to weatherData function
            weatherData(lat, lon, languageSelected);
            // Assign city name to #city, and fade in
            $("#city").css("font-style", "italic");
            $("#city").html("<h1>" + city + "</h1>");
            $("#city").fadeTo("slow", 1);
          }
        },
        error: function (err) {
          // Give error message if JSON is unresponsive
          $("#city input").val('');
          $("#city .errorMessage").html("Json not responding - Please try again");
          $("#city").fadeTo("slow", 1);
        },
        beforeSend: function (xhr) {
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
}

var getLanguages = function() {
  var languages = [
    {
      "language": {
        "name": "English",
        "value": "en"
      }
    },
    {
      "language": {
        "name": "Arabic",
        "value": "ar"
      }
    },
    {
      "language": {
        "name": "Azerbaijani",
        "value": "az"
      }
    },
    {
      "language": {
        "name": "Belarusian",
        "value": "be"
      }
    },
    {
      "language": {
        "name": "Bulgarian",
        "value": "bg"
      }
    },
    {
      "language": {
        "name": "Bosnian",
        "value": "bs"
      }
    },
    {
      "language": {
        "name": "Catalan",
        "value": "ca"
      }
    },
    {
      "language": {
        "name": "Czech",
        "value": "cs"
      }
    },
    {
      "language": {
        "name": "Danish",
        "value": "da"
      }
    },
    {
      "language": {
        "name": "German",
        "value": "de"
      }
    },
    {
      "language": {
        "name": "Greek",
        "value": "el"
      }
    },
    {
      "language": {
        "name": "Spanish",
        "value": "es"
      }
    },
    {
      "language": {
        "name": "Estonian",
        "value": "et"
      }
    },
    {
      "language": {
        "name": "Finnish",
        "value": "fi"
      }
    },
    {
      "language": {
        "name": "French",
        "value": "fr"
      }
    },
    {
      "language": {
        "name": "Croatian",
        "value": "hr"
      }
    },
    {
      "language": {
        "name": "Hungarian",
        "value": "hu"
      }
    },
    {
      "language": {
        "name": "Indonesian",
        "value": "id"
      }
    },
    {
      "language": {
        "name": "Icelandic",
        "value": "is"
      }
    },
    {
      "language": {
        "name": "Italian",
        "value": "it"
      }
    },
    {
      "language": {
        "name": "Japanese",
        "value": "ja"
      }
    },
    {
      "language": {
        "name": "Georgian",
        "value": "ka"
      }
    },
    {
      "language": {
        "name": "Cornish",
        "value": "kw"
      }
    },
    {
      "language": {
        "name": "Norwegian Bokmål",
        "value": "nb"
      }
    },
    {
      "language": {
        "name": "Dutch",
        "value": "nl"
      }
    },
    {
      "language": {
        "name": "Polish",
        "value": "pl"
      }
    },
    {
      "language": {
        "name": "Portugese",
        "value": "pt"
      }
    },
    {
      "language": {
        "name": "Romanian",
        "value": "ro"
      }
    },
    {
      "language": {
        "name": "Russian",
        "value": "ru"
      }
    },
    {
      "language": {
        "name": "Slovak",
        "value": "sk"
      }
    },
    {
      "language": {
        "name": "Slovenian",
        "value": "sl"
      }
    },
    {
      "language": {
        "name": "Serbian",
        "value": "sr"
      }
    },
    {
      "language": {
        "name": "Swedish",
        "value": "sv"
      }
    },
    {
      "language": {
        "name": "Tetum",
        "value": "tet"
      }
    },
    {
      "language": {
        "name": "Turkish",
        "value": "tr"
      }
    },
    {
      "language": {
        "name": "Ukranian",
        "value": "uk"
      }
    },
    {
      "language": {
        "name": "Igpay Atinlay",
        "value": "x-pig-latin"
      }
    },
    {
      "language": {
        "name": "Simplified Chinese",
        "value": "zh"
      }
    },
    {
      "language": {
        "name": "Traditional Chinese",
        "value": "zh-tw"
      }
    },
  ];

  return languages;
}