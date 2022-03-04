let lon;
let lat;
const APIKEY = "cf9af733cc2fc3efe6212cd3ca143c8f";
let divClimateInformation = document.querySelector(".climate-information");

function getLocalClimate() {
  divClimateInformation.innerHTML = "";
  const promise = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`
  );
  promise.then(saveClimateInformation);
  promise.catch(treatError);
}

function saveClimateInformation(weatherResponse) {
  const local = weatherResponse.data.name;
  const temperature = weatherResponse.data.main.temp;
  const climate = weatherResponse.data.weather[0].main;
  const icon = weatherResponse.data.weather[0].icon;

  printClimateInformation(local,icon,temperature,climate);

  console.log(weatherResponse);
}

function printClimateInformation(local,icon,temperature,climate){
    divClimateInformation.innerHTML += `
        <h4>${local}</h4>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>
        <p>${temperature}</p>
        <p>${climate}</p>
    `;
}

function treatError(error) {
  console.log(error.response);
}

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "O seu navegador não suporta Geolocalização.";
  }
}
function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  x.innerHTML =
    "Latitude: " +
    lat +
    "<br>Longitude: " +
    lon;

  getLocalClimate();
}

const sliderLon = document.getElementById("myRangeLon");
const outputLon = document.getElementById("demoLon");
outputLon.innerHTML = sliderLon.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderLon.oninput = function () {
  lon = this.value
  outputLon.innerHTML = lon;
};

const sliderLat = document.getElementById("myRangeLat");
const outputLat = document.getElementById("demoLat");
outputLat.innerHTML = sliderLat.value; // Display the default slider value

sliderLat.oninput = function () {
  lat = this.value
  outputLat.innerHTML = lat;
};

function searchLocalClimate(){
    getLocalClimate();
}