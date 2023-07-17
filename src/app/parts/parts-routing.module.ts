import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VCompleteComponent } from './v-complete/v-complete.component';
import { VWarrantyComponent } from './v-warranty/v-warranty.component';

const routes: Routes = [
    { path: '', redirectTo: 'v-warranty', pathMatch: 'full' },
    { path: 'v-complete',  component: VCompleteComponent},
    { path: 'v-warranty',  component: VWarrantyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
