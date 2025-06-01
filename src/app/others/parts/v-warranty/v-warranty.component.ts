import { Component } from '@angular/core';

@Component({
  selector: 'app-v-warranty',
  templateUrl: './v-warranty.component.html',
  styleUrls: ['./v-warranty.component.css']
})
export class VWarrantyComponent {
    public type: any;
    fileNames: Array<number> = [1, 2, 3, 4, 5, 6];
    folder: String = 'v-warranty';
}
