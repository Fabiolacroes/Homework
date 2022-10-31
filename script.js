//Change Date and time

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
console.log(`${day}  ${now.getHours()}:${now.getMinutes()}`);
let currentDate = `${day} ${now.getHours()}:${now.getMinutes()}`;

let li = document.querySelector("#date");
li.innerHTML = currentDate;

function tempGeo(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  //Current Temp
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let h1 = document.querySelector("#temperature");
  h1.innerHTML = `${currentTemp}`;
}
let selectTemp = document.querySelector("#search-form");
selectTemp.addEventListener("submit", searchCity);

//Change city name
function searchCity(event) {
  event.preventDefault();

  let currentCity = document.querySelector("#city-input");
  console.log(currentCity.value);
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${currentCity.value}`;

  let city = document.querySelector("#city-input").value;
  let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(tempGeo);
}
