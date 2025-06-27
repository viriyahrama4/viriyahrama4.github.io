import { Component, OnInit } from '@angular/core';
import { SidebarCompensationService } from '../sidebar-compensation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-compensation',
  templateUrl: './sidebar-compensation.component.html',
  styleUrls: ['./sidebar-compensation.component.css']
})
export class SidebarCompensationComponent implements OnInit {

  constructor(private route: ActivatedRoute, public sidebarService: SidebarCompensationService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      let currentSubPath = url[0]?.path;
        if (currentSubPath === 'compensation-contact') {
        this.sidebarService.addClass('compensation-contact');
      } else {
        this.sidebarService.addClass('compensation');
      }
    });
  }
}
