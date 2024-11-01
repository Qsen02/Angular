import { data } from "./seed";

class Article {
    public title: string;
    public description: string;
    public author: string;
    public imageUrl: string;
    constructor(title:string,description:string,author:string,imageUrl:string){
        this.title=title;
        this.description=description;
        this.author=author;
        this.imageUrl=imageUrl
    }
}

export class ArticleData {
    public getData(): Article[] {
        const articles: Article[] = [];
        for (let curData of data) {
            const article = new Article(curData.title,curData.description,curData.author,curData.imageUrl);
            articles.push(article);
        }
        return articles;
    }
}