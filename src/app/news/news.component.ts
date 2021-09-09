import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsItem = [];

  constructor(
    private service : GlobalService,
  ) { }

  ngOnInit() {
    this.service.getNewsIds().then(()=>{
      for(let i = 0;i < 20; i++){
        this.service.getNewsById(this.service.newsIds[i]).toPromise().then((response)=>{
          this.newsItem.push(response);
          console.log(response);
        })
      }
    })
  }

}
