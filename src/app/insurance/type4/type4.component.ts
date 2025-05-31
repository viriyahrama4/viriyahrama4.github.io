import { Component } from '@angular/core';

@Component({
  selector: 'app-type4',
  templateUrl: './type4.component.html',
  styleUrls: ['./type4.component.css']
})
export class Type4Component {
    public type: any;
    fileNames: Array<number> = [1];
    folder: String = 'insurance/type4';
}
