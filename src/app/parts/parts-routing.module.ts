import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VCompleteComponent } from './v-complete/v-complete.component';
import { VWarrantyComponent } from './v-warranty/v-warranty.component';
import { ContactPartsComponent } from './contact-parts/contact-parts.component';

const routes: Routes = [
    { path: '', redirectTo: 'v-warranty', pathMatch: 'full' },
    { path: 'v-complete',  component: VCompleteComponent},
    { path: 'v-warranty',  component: VWarrantyComponent},
    { path: 'contact',  component: ContactPartsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
