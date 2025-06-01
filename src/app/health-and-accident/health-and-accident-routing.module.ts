import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCareComponent } from './room-care/room-care.component';
import { HealthComponent } from './health/health.component';
import { ContactComponent } from './contact/contact.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AccidentComponent } from './accident/accident.component';

const routes: Routes = [
    { path: '', redirectTo: 'personal', pathMatch: 'full' },
    { path: 'roomCare', component: RoomCareComponent },
    { path: 'health/:type', component: HealthComponent },
    { path: 'accident/:type', component: AccidentComponent },
    { path: 'hospital', component: HospitalComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HealthAndAccidentRoutingModule { }
