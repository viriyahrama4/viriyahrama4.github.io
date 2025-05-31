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
import { SidebarHealthComponent } from './health-and-accident/sidebar-health/sidebar-health.component';
import { HospitalComponent } from './health-and-accident/hospital/hospital.component';
import { VCompleteComponent } from './parts/v-complete/v-complete.component';
import { VWarrantyComponent } from './parts/v-warranty/v-warranty.component';
import { SidebarPartsComponent } from './parts/sidebar-parts/sidebar-parts.component';
import { ContactPartsComponent } from './parts/contact-parts/contact-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    PersonalComponent,
    EverytimeComponent,
    BoneComponent,
    RoomCareComponent,
    ContactComponent,
    SidebarHealthComponent,
    HospitalComponent,
    VCompleteComponent,
    VWarrantyComponent,
    SidebarPartsComponent,
    ContactPartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
