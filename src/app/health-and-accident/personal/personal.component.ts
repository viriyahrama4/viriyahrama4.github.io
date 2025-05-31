import { Component } from '@angular/core';
import { SidebarHealthService } from '../sidebar-health.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
    constructor(public sidebarService: SidebarHealthService){
        
    }

}
