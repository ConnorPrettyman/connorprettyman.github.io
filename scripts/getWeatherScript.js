window.onload = getLocation();

var weatherPara = document.getElementById("weatherBlock");
var Latitude;
var Longitude;
var appid = "708e9d528baacac99311d153a7a53212"

function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        weatherPara.innerHTML = "No Location Data";
    }
}

function showPosition(position)
{
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getWeather();
}

function getWeather()
{
    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=" + Latitude + "&lon=" + Longitude + "&appid=" + appid + "&units=metric");
    xhr.onload = () => {
        if (xhr.readyState === 4)
        {
            if (xhr.status === 200)
            {
                let json = JSON.parse(xhr.responseText);
                document.getElementById("weatherBlock").innerHTML = json.main.temp.toFixed(0) + " °C, " + json.weather[0].description;
            }
            else
            {
                alert("Weather Request Error: Code " + xhr.status);
            }
        }
    };
    xhr.send();
}
