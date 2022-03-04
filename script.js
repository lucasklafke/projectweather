let lon = "-29.6774772"; let lat = "-52.775032";
const APIKEY = "cf9af733cc2fc3efe6212cd3ca143c8f";

function getLocalClimate(){
    const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    promise.then(showClimateInformation);
    promise.catch(treatError);
}

function showClimateInformation(weatherResponse){
    console.log(weatherResponse);
}

function treatError(error){
    console.log(error.response);
}

getLocalClimate()