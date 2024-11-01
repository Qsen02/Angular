import { Component, Input } from "@angular/core";
import { Article } from "../../data/data";

@Component({
    selector:"app-article-item",
    templateUrl:"articleItem.component.html",
    styleUrl:"articleItem.component.css",
    standalone:true
})
export class ArticleItemComponent{
    @Input("articleProp")article: Article|null=null;
}