import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-everytime',
  templateUrl: './everytime.component.html',
  styleUrls: ['./everytime.component.css']
})
export class EverytimeComponent {
[x: string]: any;
    constructor(public sidebarSevice: SidebarService){}

}