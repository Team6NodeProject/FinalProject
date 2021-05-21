import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private newService: NewsService, private router: Router) { }

  addNews = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    publishDate: new FormControl(),
    category: new FormControl()
  })

  ngOnInit(): void {
  }

  addingNews(){
    this.newService.addNews(this.addNews.value).subscribe((result)=>{
      console.log(result)
      this.router.navigate(['/view-news'])
    })
  }

}