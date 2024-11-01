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
    public isImageShown=true;
    public isDescShown=false;
    public toggleButtons=true;
    public readMore():void{
        this.isImageShown=false;
        this.isDescShown=true;
        this.toggleButtons=false;
    }
    public hideDesc():void{
        this.isImageShown=true;
        this.isDescShown=false;
        this.toggleButtons=true;
    }
}