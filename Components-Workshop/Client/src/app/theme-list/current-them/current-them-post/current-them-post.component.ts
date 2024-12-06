import { Component, Input } from '@angular/core';
import { Posts } from '../../../types/posts';

@Component({
    selector: 'app-current-them-post',
    standalone: true,
    imports: [],
    templateUrl: './current-them-post.component.html',
    styleUrl: './current-them-post.component.css'
})
export class CurrentThemPostComponent {
    @Input("postProp") post:Posts|null=null;
}
