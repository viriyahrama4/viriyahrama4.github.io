import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { PersonalComponent } from './personal/personal.component';
import { EverytimeComponent } from './everytime/everytime.component';
import { BoneComponent } from './bone/bone.component';
import { RoomCareComponent } from './room-care/room-care.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    PersonalComponent,
    EverytimeComponent,
    BoneComponent,
    RoomCareComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
