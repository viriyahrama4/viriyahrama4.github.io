import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
isit: Boolean = true
  constructor() { }
  angleArrow: any;
  id: String = 'personal';
  isHidden: boolean = true;
  isArranged: boolean = false;
  isRotated: boolean = false;

  openNav(): void {
    
    this.isHidden = false;
    console.log((window.innerWidth - 900) / 2)
      if ((window.innerWidth - 900) / 2 <= 350) {
        console.log('hd')
        this.isArranged = true
      }

  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav(): void {
    this.isHidden = true;
    this.isArranged = false;
  }
  rotateArrow(): void {
    // console.log(document.getElementById("angle_arrow").style.rotate);
    this.isRotated = !this.isRotated;
  }
  addClass(id: String) {
    this.id = id;
}
}
