import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Themes } from '../types/themes';
import { PostListComponent } from '../post-list/post-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [PostListComponent,ThemeListItemComponent],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})
export class ThemeListComponent implements OnInit {

  themesList: Themes[] = [];
  isLoading = true;

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.app.getAllThemes()
      .subscribe((themes) => {
        this.themesList = themes;
        this.isLoading = false;
      })
  }

}
