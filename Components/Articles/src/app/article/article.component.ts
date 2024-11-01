import { Component } from "@angular/core";
import { ArticleData } from "../data/data";
import { ArticleItemComponent } from "./articleItem/articleItem.component";

@Component({
    selector:"app-articles",
    templateUrl:"article.component.html",
    styleUrl:"article.component.css",
    imports:[ArticleItemComponent],
    standalone:true
})
export class ArticleComponent {
    public articles = ArticleData.getData();
}