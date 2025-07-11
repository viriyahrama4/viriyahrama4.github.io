import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VCompleteComponent } from './parts/v-complete/v-complete.component';
import { VWarrantyComponent } from './parts/v-warranty/v-warranty.component';
import { ContactPartsComponent } from './contact-parts/contact-parts.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
    { path: '', redirectTo: 'v-warranty', pathMatch: 'full' },
    { path: 'v-complete',  component: VCompleteComponent},
    { path: 'v-warranty',  component: VWarrantyComponent},
    { path: 'travel/:type', component: TravelComponent },
    { path: 'contact',  component: ContactPartsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
