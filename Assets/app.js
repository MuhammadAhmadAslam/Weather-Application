let ApiKey = '265f4c7438d055c461327c875f4550bc'
let inputDiv = document.getElementById('inputDiv')
let searchbar = document.getElementById('searchbar')
let Search = document.getElementById('Search')
let cityName = document.getElementById('cityName')
let icon = document.getElementById('icon')
let temprature = document.getElementById('temprature')
let weather = document.getElementById('weather')
let feelsLike = document.getElementById('feelsLike')
let tempraturediv = document.getElementById('temparatureDiv')
let p = document.getElementById('error')
Search.addEventListener('click' , checkWeather)
function getWeather(data) {
    if (data.cod === "404") {
        console.log(false);
    }else{
        console.log(true);
    }
    cityName.innerText = data.name
    console.log(data);
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    temprature.innerText = `${data.main.temp} C°`
    weather.innerText = data.weather[0].main
    feelsLike.innerText = `Feels Like ${data.main.feels_like} C°`
    inputDiv.removeChild(searchbar)
    inputDiv.removeChild(Search)
    // body.removeChild(inputDiv)
}
function checkWeather() {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=265f4c7438d055c461327c875f4550bc&units=metric&callback=getWeather`;
    // console.log(url);
        var script = document.createElement('script')
        script.src = url
        document.body.appendChild(script)
        
} 




