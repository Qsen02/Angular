import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})
export class ThemeListComponent {

  constructor(private app:AppService){}
  
}
