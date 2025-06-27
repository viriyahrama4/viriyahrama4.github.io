import { Component, OnInit } from '@angular/core';
import { SidebarPropertyService } from '../sidebar-property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-property',
  templateUrl: './sidebar-property.component.html',
  styleUrls: ['./sidebar-property.component.css']
})
export class SidebarPropertyComponent implements OnInit {

  constructor(private route: ActivatedRoute, public sidebarService: SidebarPropertyService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      let currentSubPath = url[0]?.path;
      if (currentSubPath === 'property-contact') {
        this.sidebarService.addClass('property-contact');
      } else if (currentSubPath === 'fire') {
        this.sidebarService.addClass('fire');
      } else if (currentSubPath === 'safe') {
        this.sidebarService.addClass('safe');
      } else {
        this.sidebarService.addClass('happiness');
      }
    });
  }
}
