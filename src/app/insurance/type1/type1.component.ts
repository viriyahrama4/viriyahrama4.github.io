import { Component } from '@angular/core';

@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.css']
})
export class Type1Component {
    public type: any;
    fileNames: Array<number> = [1];
    folder: String = 'insurance/type1';
}
