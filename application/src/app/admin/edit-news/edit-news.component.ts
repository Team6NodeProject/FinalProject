import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  news={
  title:String,
  description: String,
  image: String,
  publishDate : String,
  category: String,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
