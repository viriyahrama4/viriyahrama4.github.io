import { Component } from '@angular/core';

@Component({
  selector: 'app-health-and-accident',
  templateUrl: './health-and-accident.component.html',
  styleUrls: ['./health-and-accident.component.css']
})
export class HealthAndAccidentComponent {
mySidebar: any;
  main: any;
  angleArrow: any;
  id: String = 'personal';

  ngOnInit(): void {
    this.mySidebar = document.getElementById("mySidebar") as HTMLFormElement | null;
    this.main = document.getElementById("main") as HTMLFormElement | null;
    this.angleArrow = document.getElementById("angleArrow") as HTMLFormElement | null;
  }

  openNav(): void {
    if (this.main != null && this.mySidebar != null) {
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
  closeNav(): void {
    if (this.main != null && this.mySidebar != null) {
      this.mySidebar.style.width = "0";
      this.main.style.marginLeft = "auto";
    }
  }
  rotateArrow(): void {
    // console.log(document.getElementById("angle_arrow").style.rotate);
    if (this.angleArrow != null) {
      if (this.angleArrow.style.transform == "0deg") {
        this.angleArrow.style.rotate = "180deg";
      } else if (this.angleArrow.style.rotate == "180deg") {
        this.angleArrow.style.rotate = "0deg";
      } else {
        this.angleArrow.style.rotate = "180deg";
      }
    }
  }
  addClass(id: String) {
    this.id = id;
}
}
