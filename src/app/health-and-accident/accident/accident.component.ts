import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent {
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
        if (this.type == 'fracture') {
            this.folder = 'fracture'
            this.fileNames = [1, 2, 3, 4];
            this.title = 'อุบัติเหตุ กระดูกหัก'
            this.hasForm = true;
        }
        else if (this.type == 'paAllGen') {
            this.folder = 'pa-all-gen'
            this.fileNames = [1, 2, 3, 4];
            this.title = 'ประกันอุบัติเหตุ PA ออลเจน'
            this.hasForm = true;
        }
        else if (this.type == 'paBeautyCare') {
            this.folder = 'pa-beauty-care'
            this.fileNames = [1, 2, 3, 4, 5, 6];
            this.title = 'ประกันอุบัติเหตุ PA อุ่นใจบิวตี้แคร์'
            this.hasForm = true;
        }
        else if (this.type == 'paElderly') {
            this.folder = 'pa-elderly'
            this.fileNames = [1, 2, 3, 4, 5, 6, 7];
            this.title = 'ประกันอุบัติเหตุ PA อุ่นใจวัยเก๋า'
            this.hasForm = true;
        }
        else if (this.type == 'paFamily') {
            this.folder = 'pa-family'
            this.fileNames = [1, 2, 3];
            this.title = 'ประกันอุบัติเหตุ ครอบครัวสุขใจ'
            this.hasForm = true;
        }
        else if (this.type == 'paYouth') {
            this.folder = 'pa-youth'
            this.fileNames = [1, 2, 3, 4, 5, 6, 7];
            this.title = 'ประกันอุบัติเหตุ PA อุ่นใจวัยซน'
            this.hasForm = true;
        }
    }

}
