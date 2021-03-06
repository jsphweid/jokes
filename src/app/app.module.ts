import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {MomentModule} from "angular2-moment";
import {JokerService} from "./joker.service";

export const firebaseConfig = {
  apiKey: "AIzaSyD5OpVX1BgRK69ok6SQqHXH3nfJ5L9gvr8",
  authDomain: "salesmanjoke.firebaseapp.com",
  databaseURL: "https://salesmanjoke.firebaseio.com",
  storageBucket: "salesmanjoke.appspot.com",
  messagingSenderId: "474587093242"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
      JsonpModule,
    MomentModule
  ],
  providers: [
    JokerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
