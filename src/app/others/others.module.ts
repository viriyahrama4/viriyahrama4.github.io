import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { SidebarOthersComponent } from './sidebar-others/sidebar-others.component';
import { TravelComponent } from './travel/travel.component';
import { ContactPartsComponent } from './contact-parts/contact-parts.component';
import { VCompleteComponent } from './parts/v-complete/v-complete.component';
import { VWarrantyComponent } from './parts/v-warranty/v-warranty.component';


@NgModule({
    declarations: [
        TravelComponent,
        VCompleteComponent,
        VWarrantyComponent,
        SidebarOthersComponent,
        ContactPartsComponent
    ],
    imports: [
        OthersRoutingModule,
        CommonModule
    ]
})
export class OthersModule { }
