import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarInsuranceService {
    id: string = 'type1';
    isOpened: boolean = false;
    isHidden: boolean = true;
    isArranged: boolean = false;

    openNav(): void {
        if (this.isOpened) {
            this.closeNav();
        } else {
            this.isHidden = false;
            if ((window.innerWidth - 900) / 2 <= 350) {
                this.isArranged = true;
            }
            this.isOpened = true;
        }
    }

    closeNav(): void {
        this.isHidden = true;
        this.isArranged = false;
        this.isOpened = false;
    }

    addClass(id: string): void {
        this.id = id;
    }
}
