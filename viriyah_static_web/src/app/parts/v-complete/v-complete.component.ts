import { Component } from '@angular/core';

@Component({
  selector: 'app-v-complete',
  templateUrl: './v-complete.component.html',
  styleUrls: ['./v-complete.component.css']
})
export class VCompleteComponent {
    public type: any;
    fileNames: Array<number> = [1, 2, 3,4,5];
    folder: String = 'v-complete';
}
