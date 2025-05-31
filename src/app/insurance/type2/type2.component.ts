import { Component } from '@angular/core';

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css']
})
export class Type2Component {
    public type: any;
    fileNames: Array<number> = [1];
    folder: String = 'insurance/type2';
}
