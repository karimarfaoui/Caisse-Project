import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get('http://localhost:3000/articles');
  }

  addArticle(article: any) {
    return this.http.post('http://localhost:3000/articles', article);
  }
}