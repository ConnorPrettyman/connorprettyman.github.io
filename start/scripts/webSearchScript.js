const searchURL = "https://www.google.com/search?q=";
function searchBoxTask(event)
{
    if (event.keyCode == 13)
    {
        var val = document.getElementById("webSearchBox").value;
        window.open(searchURL + val);
        document.getElementById("search").value = "";
    }
}

function searchButtonTask(event)
{
    var val = document.getElementById("webSearchBox").value;
        window.open(searchURL + val);
        document.getElementById("search").value = "";
}
