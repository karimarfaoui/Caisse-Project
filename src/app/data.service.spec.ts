import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getArticles().subscribe((data: Object) => {
      this.articles = data as any[];
    });
  }

  addArticle(article: any) {
    this.dataService.addArticle(article).subscribe(() => {
      // Article ajouté avec succès
    });
  }
}