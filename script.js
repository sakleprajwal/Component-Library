function openNavlink(evt, navlinkName) {
  var i, navlinkContent, navlinks;
  navlinkContent = document.getElementsByClassName("navlinkContent");
  for (i = 0; i < navlinkContent.length; i++) {
    navlinkContent[i].style.display = "none";
  }
  navlinks = document.getElementsByClassName("navlinks");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" active", "");
  }
  document.getElementById(navlinkName).style.display = "block";
  evt.currentTarget.className += " active";
}

let badge = document.getElementById("badge-icon")
let toggleFlag = true;
function badgeToggle(){
  if(toggleFlag == true){
    badge.style.display = "none"
    toggleFlag = false;
  }else{
    badge.style.display = "flex"
    toggleFlag = true
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}