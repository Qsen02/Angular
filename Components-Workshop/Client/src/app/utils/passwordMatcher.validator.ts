import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatcher (passwordField:string,confirmPassword:string): ValidatorFn  {
    return function (control:AbstractControl):ValidationErrors | null{
         const password=control.get(passwordField)?.value;
         const repass=control.get(confirmPassword)?.value;
         const isMatching=password==repass;

         return isMatching?null:{dontMatch:true};
    }
}