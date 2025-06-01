import { Component, OnInit } from '@angular/core';
import { SidebarHealthService } from '../sidebar-health.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sidebar-health',
    templateUrl: './sidebar-health.component.html',
    styleUrls: ['./sidebar-health.component.css']
})
export class SidebarHealthComponent implements OnInit {
    isExpanded: boolean = false;
    isPaExpanded: boolean = false;

    constructor(private route: ActivatedRoute, public sidebarService: SidebarHealthService) { }

    ngOnInit() {
        this.route.url.subscribe(url => {
            let currentSubPath = url[0]?.path;
            if (currentSubPath === 'personal') {
                this.sidebarService.addClass('personal');
            }
            else if (currentSubPath === '24hours') {
                this.sidebarService.addClass('everytime');
            }
            else if (currentSubPath === 'bone') {
                this.sidebarService.addClass('bone');
            }
            else if (currentSubPath === 'roomCare') {
                this.sidebarService.addClass('roomCare');
            }
            else if (currentSubPath === 'health') {
                this.isExpanded = true;
                this.sidebarService.isRotated = true;
                this.sidebarService.addClass('health');
                let currentHealthSubPath = url[1]?.path;
                switch (currentHealthSubPath) {
                    case 'vBetter': this.sidebarService.addClass('vBetter'); break;
                    case 'vPrestige': this.sidebarService.addClass('vPrestige'); break;
                    case 'vDelight': this.sidebarService.addClass('vDelight'); break;
                    case 'vDeluxe': this.sidebarService.addClass('vDeluxe'); break;
                    case 'vClassic': this.sidebarService.addClass('vClassic'); break;
                    case 'vGold': this.sidebarService.addClass('vGold'); break;
                    case 'vHealthCare': this.sidebarService.addClass('vHealthCare'); break;
                    case 'vCancerEasy': this.sidebarService.addClass('vCancerEasy'); break;
                    case 'vCancerPro': this.sidebarService.addClass('vCancerPro'); break;
                }
            }
            // ---- NEW COLLAPSIBLE GROUP LOGIC ----
            else if (currentSubPath === 'accident') {
                this.isPaExpanded = true;
                let currentPaSubPath = url[1]?.path;
                switch (currentPaSubPath) {
                    case 'fracture': this.sidebarService.addClass('fracture'); break;
                    case 'paAllGen': this.sidebarService.addClass('paAllGen'); break;
                    case 'paBeautyCare': this.sidebarService.addClass('paBeautyCare'); break;
                    case 'paElderly': this.sidebarService.addClass('paElderly'); break;
                    case 'paFamily': this.sidebarService.addClass('paFamily'); break;
                    case 'paYouth': this.sidebarService.addClass('paYouth'); break;
                }
            }
            // ---- END NEW LOGIC ----
            else if (currentSubPath === 'contact') {
                this.sidebarService.addClass('contact');
            }
        });
    }
}
