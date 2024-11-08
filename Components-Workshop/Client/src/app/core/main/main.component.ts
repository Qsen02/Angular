import { Component } from '@angular/core';
import { PostListComponent } from '../../post-list/post-list.component';
import { ThemeListComponent } from '../../theme-list/theme-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PostListComponent,ThemeListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
