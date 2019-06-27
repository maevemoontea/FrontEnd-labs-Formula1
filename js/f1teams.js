function openPopup(id) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var f1 = JSON.parse(this.responseText);
	  var teamInfo = "<div class='flex-container'><h1>Team " + f1.team[id].title + " | <span class='subcaption'>" + f1.team[id].fullTeamName + "<span></h1><img src='" + f1.team[id].fullImg + "' alt='" + f1.team[id].title + "' /><div class='desc'><dl><dt>country</dt><dd>" + f1.team[id].country + "</dd><br><dt>drivers</dt><dd>" + f1.team[id].drivers + "</dd><br><dt>podiumFinishes</dt><dd>" + f1.team[id].podiumFinishes + "</dd><br><dt>championshipTitles</dt><dd>" + f1.team[id].championshipTitles + "</dd></dl><p>" + f1.team[id].desc + "</p></div></div><div id='closePopup' onclick='popupClose()'>close</div>";
	  document.getElementById("popup").style.display = "block";
	  document.getElementById("popup").innerHTML = teamInfo;
    }
  };
  xhr.open("GET", "f1teams.json", true);
  xhr.send();
}
function popupClose() {
	document.getElementById("popup").style.display = "none";
}
function loadContent() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("galery").innerHTML = this.responseXML;
	  var f1 = JSON.parse(this.responseText);
	  for (var i=0; i<f1.team.length; i++) {
		document.getElementById("galery").innerHTML += 
		"<div class='preview' id='" + f1.team[i].id + "' style='background-image: url(" + f1.team[i].img + ");' onclick='openPopup(" + f1.team[i].id + ")'><h2>" + f1.team[i].title + "</h2>";
	  }
    }
  };
  xhr.open("GET", "f1teams.json", true);
  xhr.send();
};
loadContent();