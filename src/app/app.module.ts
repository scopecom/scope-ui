import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowcaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
