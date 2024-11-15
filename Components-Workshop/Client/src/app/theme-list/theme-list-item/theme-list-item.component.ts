import { Component, Input } from '@angular/core';
import { Themes } from '../../types/themes';

@Component({
    selector: 'app-theme-list-item',
    standalone: true,
    imports: [],
    templateUrl: './theme-list-item.component.html',
    styleUrl: './theme-list-item.component.css'
})
export class ThemeListItemComponent {
    @Input("themeProps") theme: Themes | null = null;
}
