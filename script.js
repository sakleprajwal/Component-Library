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