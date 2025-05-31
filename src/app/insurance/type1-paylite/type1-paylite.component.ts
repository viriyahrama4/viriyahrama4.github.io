import { Component } from '@angular/core';

@Component({
  selector: 'app-type1-paylite',
  templateUrl: './type1-paylite.component.html',
  styleUrls: ['./type1-paylite.component.css']
})
export class Type1PayliteComponent {
    public type: any;
    fileNames: Array<number> = [1, 2, 3];
    folder: String = 'insurance/type1-paylite';
}
