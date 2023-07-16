import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthAndAccidentRoutingModule } from './health-and-accident-routing.module';
import { HealthAndAccidentComponent } from './health-and-accident.component';


@NgModule({
  declarations: [
    HealthAndAccidentComponent
  ],
  imports: [
    CommonModule,
    HealthAndAccidentRoutingModule
  ]
})
export class HealthAndAccidentModule { }
