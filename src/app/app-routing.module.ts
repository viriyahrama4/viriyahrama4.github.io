import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health-and-accident/health/health.component';
import { PersonalComponent } from './health-and-accident/personal/personal.component';
import { EverytimeComponent } from './health-and-accident/everytime/everytime.component';
import { BoneComponent } from './health-and-accident/bone/bone.component';
import { RoomCareComponent } from './health-and-accident/room-care/room-care.component';
import { ContactComponent } from './health-and-accident/contact/contact.component';

const routes: Routes = [{ path: 'health-and-accident', loadChildren: () => import('./health-and-accident/health-and-accident.module').then(m => m.HealthAndAccidentModule)},
    { path: 'parts', loadChildren: () => import('./parts/parts.module').then(m => m.PartsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
