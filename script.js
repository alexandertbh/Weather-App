// connect api: `
var card = document.querySelector(".card");
var container = document.querySelector(".card-container");
// var select = document.getElementById("select");
var select = document.getElementById("select");
var cityInput = document.getElementById("citySelect");
// var selectForm = document.getElementById("selectForm");
var searchButton = document.getElementById("searchButton");

console.log(select);

//TODO: New weather api call https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}`

var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=47.60&lon=-122.33&appid=6edf3d7adad725c245c87bb0e9040f83`;
var searchAr = ["Seattle", "Avacado", "New York"];

function weatherApi(city) {
  fetch.then(function (results) {
    console.log("results:", results);
    return results.json();
  });
}

console.log(weatherAPI);

function getApi(citySearch) {
  // fetch request gets a list of all the repos for the node.js organizatio

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=6edf3d7adad725c245c87bb0e9040f83`
  )
    .then(function (response) {
      console.log("response:", response);
      return response.json();
    })
    .then(function (data) {
      console.log("data ", data);
      let latitude = data[0].lat;
      console.log("latitude:", latitude);
      let longitude = data[0].lon;
      console.log("longitude:", longitude);
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=6edf3d7adad725c245c87bb0e9040f83`
      )
        .then(function (response) {
          console.log("response:", response);
          return response.json();
        })
        .then(function (data) {
          console.log("data:", data);

          let weatherAr = [];

          function kelvinConvert(kelvin) {
            var farenheight = (kelvin - 273.15) * (9 / 5) + 32;
            return farenheight;
          }

          //TODO: find a way to loop with new key value pairs
          for (let i = 0; i < 5; i++) {
            let weatherObj = {
              name: data.city.name,
              time: data.list[i].dt_txt,
              temp: Math.floor(kelvinConvert(data.list[i].main.temp)),
              weather: data.list[i].weather[0].description,
            };
            weatherAr.push(weatherObj);
            console.log(weatherAr);
          }

          for (let i = 0; i < 5; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "card col-2");
            var city = document.createElement("h2");
            var temp = document.createElement("p");
            var time = document.createElement("p");
            var weather = document.createElement("p");

            city.textContent = weatherAr[i].name;
            temp.textContent = weatherAr[i].temp;
            time.textContent = weatherAr[i].time;
            weather.textContent = weatherAr[i].weather;

            container.append(div);
            div.append(city);
            div.append(temp);
            div.append(time);
            div.append(weather);
          }

          localStorage.setItem("weather", JSON.stringify(weatherAr));
        });
    });
}

//store weather data in local storage

//TODO:take from local storeage and append to page

// function retrieveValue() {
//   weatherAR = localStorage.getItem(JSON.parse("weather"));
//   if (weatherAr != "") {
//     console.log(weatherAr);
//   }
// }

// retrieveValue();
//TODO:set clear page section

//event listener
searchButton.addEventListener("click", getApi);
getApi();

cityInput.addEventListener("change", (e) => {
  const citySearch = e.target.value;
  console.log("value:", citySearch);
  let city = citySearch.trim();
  getApi(city);
});
let kelvin = 300;
let farenheight = kelvinConvert(kelvin);
console.log("THIS IS FARENHEIGHT!" + farenheight);
