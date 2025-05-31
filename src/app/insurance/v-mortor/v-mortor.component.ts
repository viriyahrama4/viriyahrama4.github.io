import { Component } from '@angular/core';

@Component({
  selector: 'app-v-mortor',
  templateUrl: './v-mortor.component.html',
  styleUrls: ['./v-mortor.component.css']
})
export class VMortorComponent {
    public type: any;
    fileNames: Array<number> = [1, 2];
    folder: String = 'insurance/v-motor';
}
