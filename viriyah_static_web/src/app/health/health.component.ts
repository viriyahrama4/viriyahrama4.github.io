import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  public type: any;
  fileNames: Array<number> = [1,2,3,4,5];
  folder: String = '';
  title: String = '';

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(
      (params:Params)=>{
          this.type = params['type'];
          this.chooseType()
        }
    )}
  

  ngOnInit(): void {
    this.chooseType()
  }

  chooseType(): void{
    console.log(this.type)
    if (this.type == 'vBetter'){
      this.folder = 'v-better'
      this.title = 'V Better Care'
    }
    else if (this.type == 'vPrestige'){
      this.folder = 'v-prestige'
      this.title = 'V Prestige Care'
    }
    else if (this.type == 'vDelight'){
      this.folder = 'v-delight'
      this.title = 'V-Delight Care'
    }
    else if (this.type == 'vDeluxe'){
      this.folder = 'v-deluxe'
      this.title = 'V-Deluxe Care'
    }
    else if (this.type == 'vClassic'){
      this.folder = 'v-classic'
      this.title = 'V Better Care'
    }
    else if (this.type == 'vGold'){
      this.folder = 'v-gold'
      this.title = 'V Better Care'
    }
    else if (this.type == 'vHealthCare'){
      this.folder = 'v-health-care'
      this.title = 'V Better Care'
    }
    
    
  }

}