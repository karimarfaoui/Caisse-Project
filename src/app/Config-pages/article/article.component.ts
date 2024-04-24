import { Component,OnInit, inject } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../@services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../env/env';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [InputNumberModule, ButtonModule, DropdownModule,
    RouterLink, FormsModule, CheckboxModule,CommonModule, HttpClientModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  httpClient = inject(HttpClient);
  article: any[]= [] ;

  ngOnInit(): void {
    this.fetchArticle();
    
  }

  fetchArticle(){
    this.httpClient
    .get(`${environment.apiUrl}/article`)
    .subscribe((article: any) => {
      this.article = article;
      console.log('article', article);
      this.article = article;
    });
}}

  /*constructor(
    private articleService: ArticleService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getArticle().subscribe(res => {
      console.log(res)
    })


  }
  getArticle(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/article`);
  }
}*/
