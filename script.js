fetch("https://www.onlinemortgageadvisor.co.uk/content/task/api/index.php").then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
    TodaysWeatherWidget(data);
    WeatherLoop(data);
})

function TodaysWeatherWidget(data) {
    const weather = data[0];
    const temp = weather.degrees;
    const type = weather.weather;
    // Temp
    const tempDiv = document.getElementById("temp");
    tempDiv.innerHTML = temp + "&#176;C ";
    // Type
    const typeDiv = document.getElementById("type");
    typeDiv.innerHTML = type;
    // Icon
    const weatherImg = document.getElementById("weather_img");
    const iconImg = document.createElement("img");
    iconImg.src = weather.imgUrl;
    weatherImg.appendChild(iconImg);
}

function WeatherLoop(data) {
    const testing = data;
    var theRemovedElement = testing.shift();
    testing.forEach(weatherWidget);
}

function weatherWidget(data) {
    const weather = data;
    const wrapper = document.createElement("div");
    wrapper.className = "days";
    // Icon
    const weatherImg = document.getElementById("weather_img");
    const iconImg = document.createElement("img");
    iconImg.src = weather.imgUrl;
    // Day
    const day = weather.date;
    const days = document.createElement("p");
    days.className = "day";
    days.innerHTML = day;
    // temp
    const temp = weather.degrees;
    const temps = document.createElement("p");
    temps.className = "temp";
    temps.innerHTML = temp + "&#176;C ";
    wrapper.appendChild(iconImg);
    wrapper.appendChild(days);
    wrapper.appendChild(temps);
    week.appendChild(wrapper);

}
