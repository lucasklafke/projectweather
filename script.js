let lon;
let lat;
const APIKEY = "cf9af733cc2fc3efe6212cd3ca143c8f";
let divClimateInformation = document.querySelector(".climate-information");

function getLocalClimate() {
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

  printClimateInformation(local,temperature,climate);

  console.log(weatherResponse);
//   console.log(weatherResponse.data.name);
//   console.log(weatherResponse.data.main.temp);
//   console.log(weatherResponse.data.weather[0].main);
}

function printClimateInformation(local,temperature,climate){
    divClimateInformation.innerHTML += `
        <h4>${local}</h4>
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
  outputLon.innerHTML = this.value;
};

const sliderLat = document.getElementById("myRangeLat");
const outputLat = document.getElementById("demoLat");
outputLat.innerHTML = sliderLat.value; // Display the default slider value

sliderLat.oninput = function () {
    outputLat.innerHTML = this.value;
};