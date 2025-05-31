import { Component } from '@angular/core';

@Component({
  selector: 'app-v-roadside',
  templateUrl: './v-roadside.component.html',
  styleUrls: ['./v-roadside.component.css']
})
export class VRoadsideComponent {
    public type: any;
    fileNames: Array<number> = [1, 2];
    folder: String = 'insurance/v-roadside';
}
