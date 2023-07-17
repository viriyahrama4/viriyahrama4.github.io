import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {
    public type: any;
    fileNames: Array<number> = [1, 2, 3];
    folder: String = 'hospital';

}
