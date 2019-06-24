const mapbox = require("mapbox-gl");

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {
  let marker = document.createElement("div"); // Create a new, detached DIV
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = `url(${iconURLs[type]})`

  return new mapbox.Marker(marker).setLngLat(coords)
};

module.exports = buildMarker;
