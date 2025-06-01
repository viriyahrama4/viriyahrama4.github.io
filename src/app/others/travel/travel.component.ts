import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
public type: any;
    fileNames: Array<number> = [1, 2, 3, 4, 5];
    folder: String = '';
    title: String = '';
    hasForm: boolean = false;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params: Params) => {
                this.type = params['type'];
                this.chooseType()
            }
        )
    }


    ngOnInit(): void {
        this.chooseType()
    }

    chooseType(): void {
        if (this.type == 'v-travel') {
            this.folder = 'v-travel'
            this.fileNames = [1, 2, 3, 4, 5, 6, 7, 8];
            this.title = 'V Travel'
            this.hasForm = true;
        }
        else if (this.type == 'v-travel-thai') {
            this.folder = 'v-travel-thai'
            this.fileNames = [1, 2, 3, 4, 5, 6];
            this.title = 'V Travel Thailand'
            this.hasForm = true;
        }
    }
}
