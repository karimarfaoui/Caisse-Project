import { Component, OnInit } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../@services/article-service.service';
// Remove the duplicate import statement for 'OnInit'
// import { OnInit } from '@angular/core';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [InputNumberModule,ButtonModule,DropdownModule,
    RouterLink,FormsModule,CheckboxModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{


 constructor(private articleService: ArticleService) { }

 ngOnInit(): void {
  this.articleService.getArticle().subscribe(res => {
   console.log(res)
  })
 

}

cites: string[]=['fkarim','arfakjrh','new yourk'];
selectedCity: string[] = ['lmdkfqjlkj'];
showClear: any;
Datedejour: Date=new Date();
}
