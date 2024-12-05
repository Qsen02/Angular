import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slicing',
    standalone: true
})
export class SlicingPipe implements PipeTransform {

    transform(value: string | undefined, start: number, end: number): string {
        const slicingValue = value?.slice(start, end-1);
        return slicingValue + "...";
    }

}
