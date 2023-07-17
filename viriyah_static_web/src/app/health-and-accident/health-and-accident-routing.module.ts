import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverytimeComponent } from './everytime/everytime.component';
import { BoneComponent } from './bone/bone.component';
import { RoomCareComponent } from './room-care/room-care.component';
import { HealthComponent } from './health/health.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [{ path: '', redirectTo: 'personal', pathMatch: 'full' }, 
{ path: 'personal', component: PersonalComponent },
{ path: '24hours', component: EverytimeComponent },
{ path: 'bone', component: BoneComponent },
{ path: 'roomCare', component: RoomCareComponent },
{ path: 'health/:type', component: HealthComponent },
{ path: 'contact', component: ContactComponent },];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HealthAndAccidentRoutingModule { }
