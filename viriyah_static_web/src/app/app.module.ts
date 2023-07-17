import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './health-and-accident/health/health.component';
import { PersonalComponent } from './health-and-accident/personal/personal.component';
import { EverytimeComponent } from './health-and-accident/everytime/everytime.component';
import { BoneComponent } from './health-and-accident/bone/bone.component';
import { RoomCareComponent } from './health-and-accident/room-care/room-care.component';
import { ContactComponent } from './health-and-accident/contact/contact.component';
import { SidebarComponent } from './health-and-accident/sidebar/sidebar.component';
import { HospitalComponent } from './health-and-accident/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    PersonalComponent,
    EverytimeComponent,
    BoneComponent,
    RoomCareComponent,
    ContactComponent,
    SidebarComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
