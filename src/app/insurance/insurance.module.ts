import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Type4Component } from './type4/type4.component';
import { InsuranceHomeComponent } from './insurance-home/insurance-home.component';
import { Type2PlusComponent } from './type2-plus/type2-plus.component';
import { Type2PlusDepartmentComponent } from './type2-plus-department/type2-plus-department.component';
import { Type2PlusGoodDriveComponent } from './type2-plus-good-drive/type2-plus-good-drive.component';
import { Type3PlusComponent } from './type3-plus/type3-plus.component';
import { EmergencyHelpComponent } from './emergency-help/emergency-help.component';
import { SidebarInsuranceComponent } from './sidebar-insurance/sidebar-insurance.component';
import { Type1PayliteComponent } from './type1-paylite/type1-paylite.component';
import { VMortorComponent } from './v-mortor/v-mortor.component';
import { UnnamedDriverComponent } from './unnamed-driver/unnamed-driver.component';
import { VRoadsideComponent } from './v-roadside/v-roadside.component';


@NgModule({
  declarations: [
    Type1Component,
    Type2Component,
    Type3Component,
    Type4Component,
    InsuranceHomeComponent,
    Type2PlusComponent,
    Type2PlusDepartmentComponent,
    Type2PlusGoodDriveComponent,
    Type3PlusComponent,
    EmergencyHelpComponent,
    SidebarInsuranceComponent,
    Type1PayliteComponent,
    VMortorComponent,
    UnnamedDriverComponent,
    VRoadsideComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ]
})
export class InsuranceModule { }
