function startRain() {
  console.log("Rain started");
  var klick = "|";
  function countKlick() {

    var div = document.createElement("div");
    var str = document.createTextNode(klick);
    div.appendChild(str);


    div.style.position = 'absolute';
    div.style.top = Math.floor(Math.random() * (0))+ "px";
    div.style.left = Math.floor(Math.random() * (500)) + "px";
    div.className = 'rainDrop';
    div.style.opacity = '0';
    $(".rain").append(div);
  }


  var amount = $(".rain").length;
  var variable = 50;
  if (amount == 4) {
    variable = 200;
  } else if (amount == 3) {
    variable = 150
  } else if (amount == 2) {
    variable = 100;
  }

  window.setInterval(function(){
    countKlick();
  }, variable);
}
