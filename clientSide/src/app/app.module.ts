import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './feathers/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlobComponent } from './feathers/blob/blob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    BlobComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
