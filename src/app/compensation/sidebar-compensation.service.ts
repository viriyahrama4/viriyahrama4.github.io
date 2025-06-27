import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarCompensationService {
    isit: Boolean = true
    constructor() { }
    angleArrow: any;
    id: String = 'personal';
    isOpened: boolean = false
    isHidden: boolean = true;
    isArranged: boolean = false;
    isRotated: boolean = false;

    openNav(): void {
        if (this.isOpened) {
            this.closeNav()
        }
        else {
            this.isHidden = false;
            console.log((window.innerWidth - 900) / 2)
            if ((window.innerWidth - 900) / 2 <= 350) {
                this.isArranged = true
            }
            this.isOpened = !(this.isOpened)
        }
        
        console.log(this.isOpened)
    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav(): void {
        this.isHidden = true;
        this.isArranged = false;
        this.isOpened = !this.isOpened;
    }
    
    rotateArrow(): void {
        // console.log(document.getElementById("angle_arrow").style.rotate);
        this.isRotated = !this.isRotated;
    }
    
    addClass(id: String) {
        this.id = id;
    }
}