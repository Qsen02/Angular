import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { ArticleComponent } from './article/article.component';
import { ArticleItemComponent } from './article/articleItem/articleItem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TitleComponent,ArticleComponent,ArticleItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Articles';
}
