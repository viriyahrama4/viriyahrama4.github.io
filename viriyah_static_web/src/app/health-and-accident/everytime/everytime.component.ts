import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-everytime',
  templateUrl: './everytime.component.html',
  styleUrls: ['./everytime.component.css']
})
export class EverytimeComponent {
    constructor(public sidebarSevice: SidebarService){}

}