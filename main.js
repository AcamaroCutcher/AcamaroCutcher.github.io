// I got this function from:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav

function hamburger_func() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
