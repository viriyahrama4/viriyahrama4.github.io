/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  console.log(window.innerWidth - 350);
  if ((window.innerWidth - 900) / 2 > 350) {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "auto";
  } else {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
  }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "auto";
}
index = 2;
window.onload = function () {
  console.log(index);
};
function rotateArrow() {
  console.log(document.getElementById("angle_arrow").style.rotate);
  if (document.getElementById("angle_arrow").style.rotate == "-45deg") {
    document.getElementById("angle_arrow").style.rotate = "135deg";
  } else if (document.getElementById("angle_arrow").style.rotate == "135deg") {
    document.getElementById("angle_arrow").style.rotate = "-45deg";
  } else {
    document.getElementById("angle_arrow").style.rotate = "135deg";
  }
}
