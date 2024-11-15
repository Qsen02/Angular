import { Component, Input } from '@angular/core';
import { Themes } from '../../types/themes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-theme-list-item',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './theme-list-item.component.html',
    styleUrl: './theme-list-item.component.css'
})
export class ThemeListItemComponent {
    @Input("themeProps") theme: Themes | null = null;
}
