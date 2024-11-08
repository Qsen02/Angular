import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Posts } from '../types/posts';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  postList: Posts[] = [];

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.app.getRecentPosts()
      .subscribe((posts) => {
        this.postList = posts;
      })
  }
}
