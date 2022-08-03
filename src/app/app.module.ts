import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlatfileAdapterModule } from '@flatfile/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlatfileAdapterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
