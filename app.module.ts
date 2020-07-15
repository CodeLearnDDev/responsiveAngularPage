import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SizeDetector} from './SizeDetector/sizeDetector';
import {SizeService } from './SizeDetector/sizeService';

@NgModule({
  declarations: [
    AppComponent,SizeDetector
  ],
  imports: [
    BrowserModule
  ],
  providers: [SizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
