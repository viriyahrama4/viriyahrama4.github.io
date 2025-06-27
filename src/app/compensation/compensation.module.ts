import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompensationRoutingModule } from './compensation-routing.module';
import { CompensationComponent } from './compensation/compensation.component';
import { SidebarCompensationComponent } from './sidebar-compensation/sidebar-compensation.component';
import { CompensationContactComponent } from './compensation-contact/compensation-contact.component';


@NgModule({
  declarations: [
    CompensationComponent,
    SidebarCompensationComponent,
    CompensationContactComponent
  ],
  imports: [
    CommonModule,
    CompensationRoutingModule
  ]
})
export class CompensationModule { }
