import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarPartsService } from '../sidebar-parts.service';

@Component({
  selector: 'app-sidebar-parts',
  templateUrl: './sidebar-parts.component.html',
  styleUrls: ['./sidebar-parts.component.css']
})
export class SidebarPartsComponent {
    isExpanded: boolean = false;

    constructor(private route: ActivatedRoute, public sidebarService: SidebarPartsService) {
        this.route.url.subscribe(
            (url) => {
                var currentSubPath = url[0]['path']
                if (currentSubPath == 'v-warranty') {
                    sidebarService.addClass('v-warranty')
                }
                else if (currentSubPath == 'v-complete') {
                    sidebarService.addClass('v-complete')
                }
                else if (currentSubPath == 'contact') {
                    sidebarService.addClass('contact')
                }
                
            }
        )
    }
}
