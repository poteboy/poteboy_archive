import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { ViewModule } from './view/view.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
