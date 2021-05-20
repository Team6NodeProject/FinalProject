import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatBox/chatbox/chatbox.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { ThreeLatestNewsComponent } from './three-latest-news/three-latest-news.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageviewComponent } from './homepage/homepageview/homepageview.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    WeatherReportComponent,
    ThreeLatestNewsComponent,
    ImageGalleryComponent,
    FooterComponent,
    HomepageHeaderComponent,
    HomepageviewComponent,
    SportsPageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
