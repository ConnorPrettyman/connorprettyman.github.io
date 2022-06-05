window.onload = displayClock();
window.onload = timeOfDay();

function displayClock()
{
    const nowTime = new Date().toLocaleTimeString();
    document.getElementById("currentTime").innerHTML = nowTime;
    setTimeout(displayClock, 100);
}

function timeOfDay()
{
    var d = new Date();
    var nowHour = d.getHours()

    if (nowHour < 12)
    {
        document.getElementById("timeOfDay").innerHTML = "Morning";
    }
    else if (nowHour < 18)
    {
        document.getElementById("timeOfDay").innerHTML = "Afternoon";
    }
    else if (nowHour < 20)
    {
        document.getElementById("timeOfDay").innerHTML = "Evening";
    }
    else
    {
        document.getElementById("timeOfDay").innerHTML = "Night";
    }

    setTimeout(timeOfDay, 100);
}
