import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappinessComponent } from './happiness/happiness.component';
import { FireComponent } from './fire/fire.component';
import { SafeComponent } from './safe/safe.component';
import { PropertyContactComponent } from './property-contact/property-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'happiness', pathMatch: 'full' },
  { path: 'happiness', component: HappinessComponent },
  { path: 'fire', component: FireComponent },
  { path: 'safe', component: SafeComponent },
  { path: 'property-contact', component: PropertyContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
