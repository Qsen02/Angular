import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calcDate',
    standalone: true
})
export class CalcDatePipe implements PipeTransform {

    transform(value: string): string {
        const createdDate = new Date(value);
        const now = Date.now();
        const timeSpanInMs = now - createdDate.getDate();
        const seconds = Math.floor(timeSpanInMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) {
            return `Now`;
        } else if (minutes > 0 && minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours > 0 && hours < 24) {
            return `${hours} hours ago`;
        } else {
            return `${days} days ago`;
        }
    }

}
