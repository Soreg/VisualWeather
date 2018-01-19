function startRain() {
  var klick = "|";
  // Rain creation function
  function countKlick() {

    // Create elements
    var div = document.createElement("div");

    // Style raindrop
    div.style.position = 'absolute';
    div.style.zIndex = "1";
    div.style.top = "80px";
    div.style.left = Math.floor(Math.random() * (400)) + "px";
    div.className = 'rainDrop';
    div.style.opacity = '0';
    $(".rain .rainy").append(div);

    deleteDrop(div);
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

  // Delete function
  function deleteDrop(drop) {
    // Run after timeout..
    setTimeout(function () {
      // Delete individual drops
      drop.remove();
    }, 1000);
  }

  window.setInterval(function () {
    countKlick();
  }, variable);
}
