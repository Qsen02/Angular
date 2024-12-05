import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorMessageService {
    private err$$ = new BehaviorSubject<string>("");
    public err$ = this.err$$.asObservable();

    setError(err:unknown){
        if(err instanceof HttpErrorResponse){
            this.err$$.next(err.error.message);
        }else if(err instanceof Error){
            this.err$$.next(err.message);
        }else{
            this.err$$.next("Error Occurs");
        }
    }
}
