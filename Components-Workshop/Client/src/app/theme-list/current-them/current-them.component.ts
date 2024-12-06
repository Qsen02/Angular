import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Themes } from '../../types/themes';
import { AppService } from '../../services/app.service';
import { CurrentThemPostComponent } from './current-them-post/current-them-post.component';
import { UserService } from '../../services/user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-current-them',
    standalone: true,
    imports: [CurrentThemPostComponent,FormsModule],
    templateUrl: './current-them.component.html',
    styleUrl: './current-them.component.css'
})
export class CurrentThemComponent implements OnInit {

    theme : Themes|null=null;;
    isAuthenticated = false;
    constructor(private route: ActivatedRoute, private appService: AppService, private userService: UserService) { }

    ngOnInit(): void {
        const id: string = this.route.snapshot.params['id'];

        this.appService.getThemeById(id).subscribe((theme) => {
            this.theme = theme;
        })

        this.isAuthenticated = this.userService.isLogged;
    }

    onCreate(form:NgForm){
        const {postText}=form.value;
        const id: string = this.route.snapshot.params['id'];
        this.appService.createComment(id,postText).subscribe((theme)=>{
            if(this.theme){
                this.theme.posts.push(theme.posts[theme.posts.length-1]);
            }
            form.reset();
        })
    }

}
