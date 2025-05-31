import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Type1Component } from './type1/type1.component';
import { Type2PlusDepartmentComponent } from './type2-plus-department/type2-plus-department.component';
import { Type2PlusGoodDriveComponent } from './type2-plus-good-drive/type2-plus-good-drive.component';
import { Type2PlusComponent } from './type2-plus/type2-plus.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Type4Component } from './type4/type4.component';
import { Type3PlusComponent } from './type3-plus/type3-plus.component';
import { VMortorComponent } from './v-mortor/v-mortor.component';
import { UnnamedDriverComponent } from './unnamed-driver/unnamed-driver.component';
import { VRoadsideComponent } from './v-roadside/v-roadside.component';
import { Type1PayliteComponent } from './type1-paylite/type1-paylite.component';

const routes: Routes = [
    { path: '', redirectTo: 'type1', pathMatch: 'full' },
    { path: 'type1', component: Type1Component },
    { path: 'type1-paylite', component: Type1PayliteComponent },
    { path: 'type2', component: Type2Component },
    { path: 'type3', component: Type3Component },
    { path: 'type4', component: Type4Component },
    { path: 'type2-plus', component: Type2PlusComponent },
    { path: 'type2-plus-department', component: Type2PlusDepartmentComponent },
    { path: 'type2-plus-good-drive', component: Type2PlusGoodDriveComponent },
    { path: 'type3-plus', component: Type3PlusComponent },
    { path: 'v-mortor', component: VMortorComponent },
    { path: 'unnamed-driver', component: UnnamedDriverComponent },
    { path: 'v-roadside', component: VRoadsideComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsuranceRoutingModule { }
