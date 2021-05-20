import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatBox/chatbox/chatbox.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { ThreeLatestNewsComponent } from './three-latest-news/three-latest-news.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { SportsSectionComponent } from './sports-section/sports-section.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    WeatherReportComponent,
    ThreeLatestNewsComponent,
    ImageGalleryComponent,
    FooterComponent,
    SportsSectionComponent,
    HomepageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
