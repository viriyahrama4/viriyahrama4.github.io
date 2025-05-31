import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SidebarInsuranceService } from './sidebar-insurance.service';

@Component({
    selector: 'app-sidebar-insurance',
    templateUrl: './sidebar-insurance.component.html',
    styleUrls: ['./sidebar-insurance.component.css']
})
export class SidebarInsuranceComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public sidebarService: SidebarInsuranceService
    ) {
        // Subscribe to route changes for sidebar highlight
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = event.urlAfterRedirects || event.url;
                this.updateSidebarHighlight(url);
            }
        });
    }

    // Highlight correct sidebar item based on the current path
    private updateSidebarHighlight(url: string): void {
        // remove leading slash, split by slash
        const segments = url.replace(/^\//, '').split('/');
        // The last segment will be the route name (e.g. v-mortor, unnamed-driver, etc.)
        const typeSegment = segments[segments.length - 1] || 'type1'; // Default to 'type1' if no segment found
        console.log(segments, typeSegment);
        switch (typeSegment) {
            case 'type1':
                this.sidebarService.addClass('type1');
                break;
            case 'type1-paylite':
                this.sidebarService.addClass('type1-paylite');
                break;
            case 'type2':
                this.sidebarService.addClass('type2');
                break;
            case 'type3':
                this.sidebarService.addClass('type3');
                break;
            case 'type4':
                this.sidebarService.addClass('type4');
                break;
            case 'type2-plus':
                this.sidebarService.addClass('type2-plus');
                break;
            case 'type2-plus-department':
                this.sidebarService.addClass('type2-plus-department');
                break;
            case 'type2-plus-good-drive':
                this.sidebarService.addClass('type2-plus-good-drive');
                break;
            case 'type3-plus':
                this.sidebarService.addClass('type3-plus');
                break;
            case 'type3-plus-short':
                this.sidebarService.addClass('type3-plus-short');
                break;
            // Add these for your new items
            case 'v-mortor':
                this.sidebarService.addClass('v-mortor');
                break;
            case 'unnamed-driver':
                this.sidebarService.addClass('unnamed-driver');
                break;
            case 'v-roadside':
                this.sidebarService.addClass('v-roadside');
                break;
            default:
                this.sidebarService.addClass('');
                break;
        }
    }

}
