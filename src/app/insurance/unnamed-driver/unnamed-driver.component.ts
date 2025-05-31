import { Component } from '@angular/core';

@Component({
  selector: 'app-unnamed-driver',
  templateUrl: './unnamed-driver.component.html',
  styleUrls: ['./unnamed-driver.component.css']
})
export class UnnamedDriverComponent {
    public type: any;
    fileNames: Array<number> = [1, 2];
    folder: String = 'insurance/unnamed-driver';
}
