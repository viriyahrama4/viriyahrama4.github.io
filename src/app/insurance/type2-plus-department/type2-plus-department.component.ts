import { Component } from '@angular/core';

@Component({
  selector: 'app-type2-plus-department',
  templateUrl: './type2-plus-department.component.html',
  styleUrls: ['./type2-plus-department.component.css']
})
export class Type2PlusDepartmentComponent {
    public type: any;
    fileNames: Array<number> = [1,2,3];
    folder: String = 'insurance/type2-plus-department';
}
