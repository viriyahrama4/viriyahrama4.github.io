import { Component } from '@angular/core';

@Component({
  selector: 'app-type3-plus',
  templateUrl: './type3-plus.component.html',
  styleUrls: ['./type3-plus.component.css']
})
export class Type3PlusComponent {
    public type: any;
    fileNames: Array<number> = [1, 2];
    folder: String = 'insurance/type3-plus';
}
