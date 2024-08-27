import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Type4Component } from './type4/type4.component';
import { InsuranceHomeComponent } from './insurance-home/insurance-home.component';
import { Type5HomeComponent } from './type5-home/type5-home.component';
import { Type2PlusComponent } from './type2-plus/type2-plus.component';
import { Type2PlusShortComponent } from './type2-plus-short/type2-plus-short.component';
import { Type2PlusDepartmentComponent } from './type2-plus-department/type2-plus-department.component';
import { Type2PlusGoodDriveComponent } from './type2-plus-good-drive/type2-plus-good-drive.component';
import { Type3PlusComponent } from './type3-plus/type3-plus.component';
import { Type3PlusShortComponent } from './type3-plus-short/type3-plus-short.component';
import { EmergencyHelpComponent } from './emergency-help/emergency-help.component';


@NgModule({
  declarations: [
    Type1Component,
    Type2Component,
    Type3Component,
    Type4Component,
    InsuranceHomeComponent,
    Type5HomeComponent,
    Type2PlusComponent,
    Type2PlusShortComponent,
    Type2PlusDepartmentComponent,
    Type2PlusGoodDriveComponent,
    Type3PlusComponent,
    Type3PlusShortComponent,
    EmergencyHelpComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ]
})
export class InsuranceModule { }
