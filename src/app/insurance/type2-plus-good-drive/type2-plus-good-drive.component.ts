import { Component } from '@angular/core';

@Component({
  selector: 'app-type2-plus-good-drive',
  templateUrl: './type2-plus-good-drive.component.html',
  styleUrls: ['./type2-plus-good-drive.component.css']
})
export class Type2PlusGoodDriveComponent {
    public type: any;
    fileNames: Array<number> = [1];
    folder: String = 'insurance/type2-plus-good-drive';
}
