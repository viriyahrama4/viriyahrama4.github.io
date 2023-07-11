import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viriyah_static_web';
   mySidebar = document.getElementById("mySidebar") as HTMLFormElement |null;
   main  = document.getElementById("main") as HTMLFormElement | null;
   angleArrow = document.getElementById("angle_arrow") as HTMLFormElement | null;
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {

  console.log(window.innerWidth - 350);
  console.log(this.mySidebar);
  console.log(this.main);
  console.log(this.angleArrow);
  if (this.main != null && this.mySidebar != null){
      if ((window.innerWidth - 900) / 2 > 350) {
    this.mySidebar.style.width = "350px";
    this.main.style.marginLeft = "auto";
  } else {
    this.mySidebar.style.width = "350px";
    this.main.style.marginLeft = "350px";
  }
  }

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
closeNav() {
  if (this.main != null && this.mySidebar != null){
  this.mySidebar.style.width = "0";
  this.main.style.marginLeft = "auto";
  }
}
rotateArrow() {
  // console.log(document.getElementById("angle_arrow").style.rotate);
  if (this.angleArrow != null){
  if (this.angleArrow.style.transform == "0deg") {
    this.angleArrow.style.rotate = "180deg";
  } else if (this.angleArrow.style.rotate == "180deg") {
    this.angleArrow.style.rotate = "0deg";
  } else {
    this.angleArrow.style.rotate = "180deg";
  }
}
}}
