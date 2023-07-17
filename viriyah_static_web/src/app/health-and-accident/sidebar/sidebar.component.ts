import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    isExpanded: boolean = false;
     
    constructor(private route: ActivatedRoute, public sidebarService: SidebarService) {
        this.route.url.subscribe(
            (url) => {
                var currentSubPath = url[0]['path']
                if (currentSubPath == 'personal'){
                    sidebarService.addClass('personal')
                }
                else if (currentSubPath == '24hours'){
                    sidebarService.addClass('everytime')
                }
                else if (currentSubPath == 'bone'){
                    sidebarService.addClass('bone')
                }
                else if (currentSubPath == 'roomCare'){
                    sidebarService.addClass('roomCare')
                }
                else if (currentSubPath == 'health'){
                    this.isExpanded = true
                    sidebarService.isRotated = true
                    sidebarService.addClass('health')
                    var currentHealthSubPath = url[1]['path']
                    if (currentHealthSubPath == 'vBetter'){
                        sidebarService.addClass('vBetter')
                    }
                    else if (currentHealthSubPath == 'vPrestige'){
                        sidebarService.addClass('vPrestige')
                    }
                    else if (currentHealthSubPath == 'vPrestige'){
                        sidebarService.addClass('vPrestige')
                    }
                    else if (currentHealthSubPath == 'vDelight'){
                        sidebarService.addClass('vDelight')
                    }
                    else if (currentHealthSubPath == 'vDeluxe'){
                        sidebarService.addClass('vDeluxe')
                    }
                    else if (currentHealthSubPath == 'vClassic'){
                        sidebarService.addClass('vClassic')
                    }
                    else if (currentHealthSubPath == 'vGold'){
                        sidebarService.addClass('vGold')
                    }
                    else if (currentHealthSubPath == 'vHealthCare'){
                        sidebarService.addClass('vHealthCare')
                    }
                }
                else if (currentSubPath == 'contact'){
                    sidebarService.addClass('contact')
                }
            }
        )
    }

}
