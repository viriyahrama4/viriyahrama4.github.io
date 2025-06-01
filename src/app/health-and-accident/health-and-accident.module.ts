import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthAndAccidentRoutingModule } from './health-and-accident-routing.module';
import { AccidentComponent } from './accident/accident.component';
import { HealthComponent } from './health/health.component';
import { ContactComponent } from './contact/contact.component';
import { RoomCareComponent } from './room-care/room-care.component';
import { SidebarHealthComponent } from './sidebar-health/sidebar-health.component';
import { HospitalComponent } from './hospital/hospital.component';


@NgModule({
    declarations: [
        HealthComponent,
        RoomCareComponent,
        ContactComponent,
        SidebarHealthComponent,
        AccidentComponent,
        HospitalComponent
    ],
    imports: [
        CommonModule,
        HealthAndAccidentRoutingModule,
    ]
})
export class HealthAndAccidentModule { }
