import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VCompleteComponent } from './others/parts/v-complete/v-complete.component';
import { VWarrantyComponent } from './others/parts/v-warranty/v-warranty.component';
import { SidebarOthersComponent } from './others/sidebar-others/sidebar-others.component';
import { ContactPartsComponent } from './others/contact-parts/contact-parts.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
