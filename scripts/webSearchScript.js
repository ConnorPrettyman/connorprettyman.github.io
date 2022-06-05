const searchURL = "https://duckduckgo.com/?q=";
function searchTask(event)
{
    if (event.keyCode == 13)
    {
        var val = document.getElementById("webSearchBox").value;
        window.open(searchURL + val);
        document.getElementById("search").value = "";
    }
}
