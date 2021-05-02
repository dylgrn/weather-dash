var btn = document.querySelector("#btn");

btn.addEventListener("click", getWeather)
btn.addEventListener('click', getFiveDay)

function getWeather() { 
  var cityS = document.querySelector("#city").value;
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityS +'&appid=3c90078ac275b2ff619b8d5d48af70ed')
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);   
  const { temp } = data.main;
  const place = data.name;
  const date = new Date().toLocaleDateString("en-US").split("/");
  const { description, icon } = data.weather[0];
  const wind = data.wind.speed
  const humid = data.main.humidity;

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const fahrenheit = (temp - 273.15)* 1.8 + 32;

  const iconImg = document.getElementById('weather-icon');
  const loc = document.querySelector('#location');
  const dateEle = document.querySelector('.date')
  const tempF = document.querySelector('.f');
  const desc = document.querySelector('.desc');
  const windS = document.querySelector('.w')
  const humidity = document.querySelector('.humid')

  iconImg.src = iconUrl;
  loc.textContent = `${place}`;
  dateEle.textContent = `${date}`
  desc.textContent = `${description}`;
  tempF.textContent = `Temp: ${fahrenheit.toFixed(2)} °F`;
  windS.textContent = `Wind: ${wind} mph`;
  humidity.textContent = `Humidity: ${humid} %`;
  });
}

function getFiveDay() {
  var cityS = document.querySelector("#city").value;
  fetch ('https://api.openweathermap.org/data/2.5/forecast?q='+ cityS +'&appid=3c90078ac275b2ff619b8d5d48af70ed')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  //const day = data.list[2]
  const { temp } = data.list[3].main;
  const place = data.city.name;
  const date = data.list[3].dt_txt;
  const { description, icon } = data.list[3].weather[0];
  const wind = data.list[3].wind.speed
  const humid = data.list[3].main.humidity;

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const fahrenheit = (temp - 273.15)* 1.8 + 32;

  const iconImg = document.getElementById('weather-icon2');
  const loc = document.querySelector('#location2');
  const dateEle = document.querySelector('.date2')
  const tempF = document.querySelector('.f2');
  const desc = document.querySelector('.desc2');
  const windS = document.querySelector('.w2')
  const humidity = document.querySelector('.humid2')

  iconImg.src = iconUrl;
  loc.textContent = `${place}`;
  dateEle.textContent = `${date}`
  desc.textContent = `${description}`;
  tempF.textContent = `Temp: ${fahrenheit.toFixed(2)} °F`;
  windS.textContent = `Wind: ${wind} mph`;
  humidity.textContent = `Humidity: ${humid} %`

  });   
};