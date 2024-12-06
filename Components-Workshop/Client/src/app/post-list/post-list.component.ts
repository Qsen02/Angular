import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Posts } from '../types/posts';
import { CalcDatePipe } from '../pipes/calc-date.pipe';

@Component({
    selector: 'app-post-list',
    standalone: true,
    imports: [CalcDatePipe],
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

    postList: Posts[] = [];
    isLoading = true;

    constructor(private app: AppService) { }

    ngOnInit(): void {
        this.app.getRecentPosts()
            .subscribe((posts) => {
                this.postList = posts;
                this.isLoading = false;
            })
    }
}
