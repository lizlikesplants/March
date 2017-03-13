
// var map;
console.log ("pennThings");
var layerPlottedMarkers;

var marker = L.marker([39.9522, -75.3639]);
var popUp = "Ima Pickle Stand!";
marker.bindPopup(popUp);
marker.addTo(map);
  // layerPlottedMarkers = L.geoJSON(farmerSet).bindPopup(popUp).addTo(map);
console.log("layerPlottedMarkers");

var myIcon = L.icon({
    iconUrl: 'images/marker-icon.png',
    iconSize: [38, 35],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowAnchor: [22, 94],
    shadowUrl: 'images/marker-shadow.png'
});

// L.marker([39.9522, -75.1639], {icon: myIcon}).addTo(map);

var polyline = L.polyline([
          [40.489344, -74.448179],
          [40.496630, -74.446183],
          [40.497378, -74.412025],
          [40.473877, -74.423526],
          [40.513850, -74.466167]]
          ).addTo(map);

console.log(polyline);
