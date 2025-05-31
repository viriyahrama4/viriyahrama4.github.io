import { Component } from '@angular/core';

@Component({
  selector: 'app-type3',
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.css']
})
export class Type3Component {
    public type: any;
    fileNames: Array<number> = [1];
    folder: String = 'insurance/type3';
}
