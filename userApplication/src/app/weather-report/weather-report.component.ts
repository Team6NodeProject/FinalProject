import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  weatherInfo: any = [];
  constructor() { }

  cityName:string = "Seattle"
  weatherUrl:string = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + this.cityName + "&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

  
  temp: number = 0; 
  feelsLike: number = 0;
  description: string = "null";

  


  ngOnInit(): void {
    this.getCity();
    this.setWeather();
  }

  getCity(){
    //TODO dont know how to fill.
  }

  setWeather(){
    fetch(this.weatherUrl).then( response => response.json()).then(data =>{
      this.feelsLike = (Math.round((data['list'][0].feels_like.day * (9.0/5.0)) + 32));
      this.description = data['list'][0]['weather'][0].description;
      this.temp = (Math.round((data['list'][0].temp.day * (9.0/5.0)) + 32))
    }) 

  }



}
