// I got this function from:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
