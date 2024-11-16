import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Themes } from '../../types/themes';
import { AppService } from '../../services/app.service';
import { CurrentThemPostComponent } from './current-them-post/current-them-post.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-current-them',
  standalone: true,
  imports: [CurrentThemPostComponent],
  templateUrl: './current-them.component.html',
  styleUrl: './current-them.component.css'
})
export class CurrentThemComponent implements OnInit {

  theme={} as Themes;
  isAuthenticated=false;
  constructor(private route: ActivatedRoute, private appService: AppService ,private userService:UserService) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];

    this.appService.getThemeById(id).subscribe((theme) => {
      this.theme = theme;
    })

    this.isAuthenticated=this.userService.isLogged;
  }

}
