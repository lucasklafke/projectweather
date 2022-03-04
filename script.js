let lon = "139";
let lat = "35";

const APIKEY = "cf9af733cc2fc3efe6212cd3ca143c8f";

function getLocalClimate() {
  const promise = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`
  );
  promise.then(showClimateInformation);
  promise.catch(treatError);
}

function showClimateInformation(weatherResponse) {
  console.log(weatherResponse);
}

function treatError(error) {
  console.log(error.response);
}

getLocalClimate();

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "O seu navegador não suporta Geolocalização.";
  }
}
function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

const sliderLon = document.getElementById("myRangeLon");
const outputLon = document.getElementById("demoLon");
outputLon.innerHTML = sliderLon.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderLon.oninput = function () {
  outputLon.innerHTML = this.value;
};

const sliderLat = document.getElementById("myRangeLat");
const outputLat = document.getElementById("demoLat");
outputLat.innerHTML = sliderLat.value; // Display the default slider value
