import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WentwellComponent } from './wentwell/wentwell.component';
import { TobeimprovedComponent } from './tobeimproved/tobeimproved.component';
import { StartdoingComponent } from './startdoing/startdoing.component';
import { ActionitemsComponent } from './actionitems/actionitems.component';

@NgModule({
  declarations: [
    AppComponent,
    WentwellComponent,
    TobeimprovedComponent,
    StartdoingComponent,
    ActionitemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
