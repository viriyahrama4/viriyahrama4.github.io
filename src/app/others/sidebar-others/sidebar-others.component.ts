import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarPartsService } from '../sidebar-parts.service';

@Component({
  selector: 'app-sidebar-others',
  templateUrl: './sidebar-others.component.html',
  styleUrls: ['./sidebar-others.component.css']
})
export class SidebarOthersComponent {
    isProductExpanded: boolean = false;
    isTravelExpanded: boolean = false;

    constructor(private route: ActivatedRoute, public sidebarService: SidebarPartsService) {
        this.route.url.subscribe(
            (url) => {
                const currentSubPath = url[0]['path'];
                console.log(url)
                console.log('Current sub-path:', currentSubPath);
                // Group 1
                if (currentSubPath === 'v-warranty' || currentSubPath === 'v-complete') {
                    this.isProductExpanded = true;
                    this.isTravelExpanded = false;
                    sidebarService.addClass(currentSubPath);
                }
                // Group 2
                else if (currentSubPath === 'travel') {
                    var currentTravelSubPath = url[1]?.path;
                    console.log('Current travel sub-path:', currentTravelSubPath);
                    this.isProductExpanded = false;
                    this.isTravelExpanded = true;
                    sidebarService.addClass(currentTravelSubPath);
                }

                // Contact
                else if (currentSubPath === 'contact') {
                    this.isProductExpanded = false;
                    this.isTravelExpanded = false;
                    sidebarService.addClass('contact');
                }
            }
        )
    }
}