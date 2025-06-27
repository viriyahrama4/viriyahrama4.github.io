import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompensationComponent } from './compensation/compensation.component';
import { CompensationContactComponent } from './compensation-contact/compensation-contact.component';

const routes: Routes = [
    { path: '', redirectTo: 'compensation', pathMatch: 'full' },
    { path: 'compensation', component: CompensationComponent },
    { path: 'compensation-contact', component: CompensationContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompensationRoutingModule { }
