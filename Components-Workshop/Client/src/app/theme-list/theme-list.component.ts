import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Themes } from '../types/themes';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [],
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
