import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatBox/chatbox/chatbox.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { ThreeLatestNewsComponent } from './three-latest-news/three-latest-news.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageviewComponent } from './homepage/homepageview/homepageview.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about/about.component';
import { FormsModule } from '@angular/forms';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    WeatherReportComponent,
    ThreeLatestNewsComponent,
    FooterComponent,
    HomepageHeaderComponent,
    HomepageviewComponent,
    SportsPageComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
