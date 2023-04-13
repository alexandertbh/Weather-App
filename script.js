// connect api: `
var weatherAPI =
  "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6edf3d7adad725c245c87bb0e9040f83";

// DOM Connections to indext .html

//pull api data
function getWeatherApi(request) {
  fetch(weatherAPI)
    .then(function (response) {
      console.log(response.status);
      return response.json();
    })
    .then(function (data) {
      var weather = data;
      console.log(weather);
    });
}
// for loop append content

//store weather data in local storage

//event listener

getWeatherApi(weatherAPI);
