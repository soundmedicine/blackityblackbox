var textEntry = document.getElementById("text")
var button = document.getElementsByID("Submit")


button.addEventlistener("click", show)

function show() {
    document.getElementById("front").innerHTML = window.location.search

}