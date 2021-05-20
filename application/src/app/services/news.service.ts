import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// If in docker url should be server instead of localhost
const getNewsUrl = 'http://localhost:3000/News/getNews'
const addNewsUrl = 'http://localhost:3000/News/addNews'
const deleteNewsUrl = 'http://localhost:3000/News/delete/'


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(getNewsUrl)
  }

  deleteNews(title: string) {
    return this.http.delete(deleteNewsUrl + title)
  }

  addNews(news: any) {
    return this.http.post(addNewsUrl, news)
  }
}