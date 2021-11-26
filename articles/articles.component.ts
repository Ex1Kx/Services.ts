import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles = null;


  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articles = this.articlesService.retornar();

  }

}
