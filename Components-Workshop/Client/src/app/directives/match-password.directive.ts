import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { passwordMatcher } from '../utils/passwordMatcher.validator';

@Directive({
    selector: '[appMatchPassword]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: MatchPasswordDirective,
        },
    ],
})
export class MatchPasswordDirective implements Validator {
    @Input() fields:string[]=[]
    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {
       return passwordMatcher(this.fields[0],this.fields[1])(control);
    }
}
