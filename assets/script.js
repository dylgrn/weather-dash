//var btn2 = document.querySelector('#btn2').value;
var btn = document.querySelector("#btn");
var cityS = document.querySelector("#city").value;

btn.addEventListener("click", getWeather)
btn.addEventListener('click', getFiveDay)
btn.addEventListener('click', localS)
btn.addEventListener('click', getlocal)
//btn2.addEventListener('click', getWeather)

function localS() {
  var text = document.querySelector('#city')
  var locS = text;
  localStorage.setItem('text', locS.value)
}

function getlocal() {
 let store = localStorage.getItem('text')
 document.querySelector('.history').innerHTML = store;
}

getlocal();

function getWeather() { 
  var cityS = document.querySelector("#city").value;
  //let histS = document.querySelector('.history').value;
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

  const temp3  = data.list[11].main.temp;
  const place3 = data.city.name;
  const date3 = data.list[11].dt_txt;
  const description3 = data.list[11].weather[0].description
  const icon3 = data.list[11].weather[0].icon
  const wind3 = data.list[11].wind.speed
  const humid3 = data.list[11].main.humidity;

  const iconUrl3 = `http://openweathermap.org/img/wn/${icon3}@2x.png`;
  const fahrenheit3 = (temp3 - 273.15)* 1.8 + 32;

  const iconImg3 = document.getElementById('weather-icon3');
  const loc3 = document.querySelector('#location3');
  const dateEle3 = document.querySelector('.date3')
  const tempF3 = document.querySelector('.f3');
  const desc3 = document.querySelector('.desc3');
  const windS3 = document.querySelector('.w3')
  const humidity3 = document.querySelector('.humid3')

  iconImg3.src = iconUrl3;
  loc3.textContent = `${place3}`;
  dateEle3.textContent = `${date3}`
  desc3.textContent = `${description3}`;
  tempF3.textContent = `Temp: ${fahrenheit3.toFixed(2)} °F`;
  windS3.textContent = `Wind: ${wind3} mph`;
  humidity3.textContent = `Humidity: ${humid3} %`

  const temp4  = data.list[19].main.temp;
  const place4 = data.city.name;
  const date4 = data.list[19].dt_txt;
  const description4 = data.list[19].weather[0].description
  const icon4 = data.list[19].weather[0].icon
  const wind4 = data.list[19].wind.speed
  const humid4 = data.list[19].main.humidity;

  const iconUrl4 = `http://openweathermap.org/img/wn/${icon4}@2x.png`;
  const fahrenheit4 = (temp4 - 273.15)* 1.8 + 32;

  const iconImg4 = document.getElementById('weather-icon4');
  const loc4 = document.querySelector('#location4');
  const dateEle4 = document.querySelector('.date4')
  const tempF4 = document.querySelector('.f4');
  const desc4 = document.querySelector('.desc4');
  const windS4 = document.querySelector('.w4')
  const humidity4 = document.querySelector('.humid4')

  iconImg4.src = iconUrl4;
  loc4.textContent = `${place4}`;
  dateEle4.textContent = `${date4}`
  desc4.textContent = `${description4}`;
  tempF4.textContent = `Temp: ${fahrenheit4.toFixed(2)} °F`;
  windS4.textContent = `Wind: ${wind4} mph`;
  humidity4.textContent = `Humidity: ${humid4} %`

  const temp5  = data.list[27].main.temp;
  const place5 = data.city.name;
  const date5 = data.list[27].dt_txt;
  const description5 = data.list[27].weather[0].description
  const icon5 = data.list[27].weather[0].icon
  const wind5 = data.list[27].wind.speed
  const humid5 = data.list[27].main.humidity;

  const iconUrl5 = `http://openweathermap.org/img/wn/${icon5}@2x.png`;
  const fahrenheit5 = (temp5 - 273.15)* 1.8 + 32;

  const iconImg5 = document.getElementById('weather-icon5');
  const loc5 = document.querySelector('#location5');
  const dateEle5 = document.querySelector('.date5')
  const tempF5 = document.querySelector('.f5');
  const desc5 = document.querySelector('.desc5');
  const windS5 = document.querySelector('.w5')
  const humidity5 = document.querySelector('.humid5')

  iconImg5.src = iconUrl5;
  loc5.textContent = `${place5}`;
  dateEle5.textContent = `${date5}`
  desc5.textContent = `${description5}`;
  tempF5.textContent = `Temp: ${fahrenheit5.toFixed(2)} °F`;
  windS5.textContent = `Wind: ${wind5} mph`;
  humidity5.textContent = `Humidity: ${humid5} %`

  const temp6  = data.list[35].main.temp;
  const place6 = data.city.name;
  const date6 = data.list[35].dt_txt;
  const description6 = data.list[35].weather[0].description
  const icon6 = data.list[35].weather[0].icon
  const wind6 = data.list[35].wind.speed
  const humid6 = data.list[35].main.humidity;

  const iconUrl6 = `http://openweathermap.org/img/wn/${icon6}@2x.png`;
  const fahrenheit6 = (temp6 - 273.15)* 1.8 + 32;

  const iconImg6 = document.getElementById('weather-icon6');
  const loc6 = document.querySelector('#location6');
  const dateEle6 = document.querySelector('.date6')
  const tempF6 = document.querySelector('.f6');
  const desc6 = document.querySelector('.desc6');
  const windS6 = document.querySelector('.w6')
  const humidity6 = document.querySelector('.humid6')

  iconImg6.src = iconUrl6;
  loc6.textContent = `${place6}`;
  dateEle6.textContent = `${date6}`
  desc6.textContent = `${description6}`;
  tempF6.textContent = `Temp: ${fahrenheit6.toFixed(2)} °F`;
  windS6.textContent = `Wind: ${wind6} mph`;
  humidity6.textContent = `Humidity: ${humid6} %`
  });   
};

