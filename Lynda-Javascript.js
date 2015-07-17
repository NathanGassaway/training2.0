console.warn("watchout")

var a = 1;
var b = document.getElementById("HeaderBody");
var c = document.getElementsByTagName("input");
var intervalHandle;

function dates() {
  var today = new Date();

  console.log(today.getFullYear());

}



b.onclick = function() {

  for (a = 1; a < 3; a++) {

    var newHeader = document.createElement("h2");
    var newText = document.createTextNode("Believe it");
    var newerHeader = document.createElement("li");
    var lastHeader = newHeader.getElementsByTagName("li")[2];

    newHeader.appendChild(newText);

    document.getElementById("HeaderBody").appendChild(newHeader)

    newHeader.insertBefore(newerHeader, lastHeader);

  }
};

c.onfocus = function() {

  var formText = document.createTextNode("Believe it");

  c.appendChild(formText);
}

function beginAnimate (){
  document.getElementById('HeaderBody').style.color = "red";
  document.getElementById('HeaderBody').style.fontSize = "30px";
}


window.onload = function() {
  setTimeout(beginAnimate, 1000)
};
