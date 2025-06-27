import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { HappinessComponent } from './happiness/happiness.component';
import { FireComponent } from './fire/fire.component';
import { SafeComponent } from './safe/safe.component';
import { PropertyContactComponent } from './property-contact/property-contact.component';
import { SidebarPropertyComponent } from './sidebar-property/sidebar-property.component';


@NgModule({
  declarations: [
    HappinessComponent,
    FireComponent,
    SafeComponent,
    PropertyContactComponent,
    SidebarPropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
