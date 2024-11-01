import { Component } from "@angular/core";
import { ArticleData } from "../data/data";

@Component({
    selector:"app-articles",
    templateUrl:"article.component.html",
    styleUrl:"article.compoenent.css",
    standalone:true
})
export class ArticleComponent {
    public articles = ArticleData.getData();
}