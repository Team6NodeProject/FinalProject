import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// If in docker url should be server instead of localhost
const getNewsUrl = 'http://localhost:3000/News/getNews'
const getSportsUrl = 'http://localhost:3000/News/getSports'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(getNewsUrl)
  }

  getSports() {
    return this.http.get(getSportsUrl)
  }
}