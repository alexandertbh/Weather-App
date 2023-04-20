// connect api: `
var card = document.querySelector(".card");
var container = document.querySelector(".card-container");
// var select = document.getElementById("select");
var select = document.getElementById("select");

console.log(select);
// search = "";
// var grocodingApi =
var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=47.60&lon=-122.33&appid=6edf3d7adad725c245c87bb0e9040f83`;
var searchAr = ["Seattle", "Avacado", "New York"];
// DOM Connections to indext .html

function storeValue(event) {
  container.innerHTML = "";
  let selectedCity = select.value;
  console.log(selectedCity);
  if (selectedCity === "Seattle") {
    weatherAPI =
      "https://api.openweathermap.org/data/2.5/forecast?lat=47.60&lon=-122.33&appid=6edf3d7adad725c245c87bb0e9040f83";
    console.log("Seattle");
  } else if (selectedCity === "Avacado") {
    weatherAPI =
      "https://api.openweathermap.org/data/2.5/forecast?lat=36.7783&lon=-119.41&appid=6edf3d7adad725c245c87bb0e9040f83";
    console.log("Avacado");
  } else if (selectedCity === "New York") {
    weatherAPI =
      "https://api.openweathermap.org/data/2.5/forecast?lat=40.71&lon=-74.00&appid=6edf3d7adad725c245c87bb0e9040f83";
    console.log("New York");
  } else {
    alert("Please Select either Avacado, New York, or Seattle");
  }
  getApi();
}
console.log(weatherAPI);
//pull api data
// function getWeatherApi(request) {
function getApi() {
  // fetch request gets a list of all the repos for the node.js organizatio

  fetch(weatherAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //city name
      console.log(data.city.name);
      //weather
      console.log(data.list[0].weather[0].description);
      //temp
      console.log(data.list[0].main.temp);
      // console.log(data.city.name);
      // //hour
      console.log(data.list[0].dt_txt);

      let weatherObj = {
        name: "seattle",
        time: "2:00 pm",
        temp: "67 F",
        weather: "light Rain",
      };

      let testWeatherObj = {
        name: "seattle",
        time: "2:00 pm",
        temp: "67 F",
        weather: "light Rain",
      };
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
select.addEventListener("change", storeValue);
getApi();

let kelvin = 300;
let farenheight = kelvinConvert(kelvin);
console.log("THIS IS FARENHEIGHT!" + farenheight);
