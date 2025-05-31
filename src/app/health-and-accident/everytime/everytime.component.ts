import { Component } from '@angular/core';
import { SidebarHealthService } from '../sidebar-health.service';

@Component({
  selector: 'app-everytime',
  templateUrl: './everytime.component.html',
  styleUrls: ['./everytime.component.css']
})
export class EverytimeComponent {
    constructor(public sidebarSevice: SidebarHealthService){}

}