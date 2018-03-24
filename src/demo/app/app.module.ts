import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TimelineModule} from 'ng-custom-timeline';

import {AppComponent} from './app.component';

@NgModule({
  imports:      [ BrowserModule, TimelineModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
