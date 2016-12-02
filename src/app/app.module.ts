import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EleProFinalComponent } from './ele-pro-final/ele-pro-final.component';
import { ProfinModelComponent } from './profin-model/profin-model.component';

@NgModule({
  declarations: [
    AppComponent,
    EleProFinalComponent,
    ProfinModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
