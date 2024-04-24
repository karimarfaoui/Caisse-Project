import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { HttpClientModule } from '@angular/common/http';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
