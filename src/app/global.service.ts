import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  newsIds = []

  constructor(
    private readonly http : HttpClient,
  ) { }

  getNewsIds(){
    return new Promise<void>((resolve) => {
      this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').toPromise().then(
        (response : any)=>{
          this.newsIds = response;
          console.log("global=>"+response);
          resolve();
        }
      )
    })
  }

  getNewsById(id : string){
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  }

}
