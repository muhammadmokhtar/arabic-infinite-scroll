import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import {MomentModule} from 'angular2-moment';
import {BaseHTTPService} from './BaseHTTP.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
    MomentModule
  ],
  providers: [BaseHTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
