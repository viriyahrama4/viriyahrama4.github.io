import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health/health.component';
import { PersonalComponent } from './personal/personal.component';
import { EverytimeComponent } from './everytime/everytime.component';
import { BoneComponent } from './bone/bone.component';
import { RoomCareComponent } from './room-care/room-care.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{ path: '', component: PersonalComponent },
{ path: '24hours', component: EverytimeComponent },
{ path: 'bone', component: BoneComponent },
{ path: 'roomCare', component: RoomCareComponent },
{ path: 'health/:type', component: HealthComponent }, 
{ path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
