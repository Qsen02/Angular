import { Component } from "@angular/core";

@Component({
    selector: "app-title",
    templateUrl: "title.component.html",
    styleUrl: "title.component.css",
    standalone: true
})
export class TitleComponent {
    public title = "Welcome to article site!";
}