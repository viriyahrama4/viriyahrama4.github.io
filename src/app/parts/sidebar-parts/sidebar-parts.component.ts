import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar-parts',
  templateUrl: './sidebar-parts.component.html',
  styleUrls: ['./sidebar-parts.component.css']
})
export class SidebarPartsComponent {
    isExpanded: boolean = false;

    constructor(private route: ActivatedRoute, public sidebarService: SidebarService) {
        this.route.url.subscribe(
            (url) => {
                var currentSubPath = url[0]['path']
                if (currentSubPath == 'v-warranty') {
                    sidebarService.addClass('v-warranty')
                }
                else if (currentSubPath == 'v-complete') {
                    sidebarService.addClass('v-complete')
                }
                
            }
        )
    }
}
