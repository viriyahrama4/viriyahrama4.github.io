import { Component } from '@angular/core';

@Component({
  selector: 'app-type2-plus',
  templateUrl: './type2-plus.component.html',
  styleUrls: ['./type2-plus.component.css']
})
export class Type2PlusComponent {
    public type: any;
    fileNames: Array<number> = [1];
    folder: String = 'insurance/type2-plus';
}
