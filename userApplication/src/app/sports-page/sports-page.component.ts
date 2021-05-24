import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { SportsWeather } from './sportsWeather';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})
export class SportsPageComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  allSportsArticleReports: SportsWeather[] = [];
  filter:string = "";


  ngOnInit(): void {
    //itertate through and filter based on sports.
    this.newsService.getSports().subscribe(
      (resposne) =>{
        this.allSportsArticleReports = resposne;
      }, (error)=>{
        
      }
    )
  }

  filterNews(){
    //TODO add a filter.
  }
}
