import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
    <app-sidebar></app-sidebar>
    <div id="content">
      <app-article 
      *ngFor="let article of articles"
      [article]="article"></app-article>
      
    </div>
  </div>
  `
})
export class AppComponent {
  articles: Object[];

  constructor() {
    this.articles = [
      new Article("The Angular 2 screencast", "the easiest way to learn Angular 2"),
      new Article("Fullstack react", "Wanna learn react as well?")
    ];
  }
}

@Component({
  selector: 'app-sidebar',
  template: `
  <div id="sidebar">
    Sidebar will go here
  </div>
  `
})
export class SidebarConponent {

}

@Component({
  selector: 'app-article',
  template: `
  <div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.date() }}</p>
  </div>
  `
})
export class ArticleComponent{
  @Input() article: Object;
}


class Article {
  
  constructor(
    private title: string,
    private description: string) {

  }

  date() :Date {
    return new Date();
  }

  //I got to chapter 4 - Styling

}