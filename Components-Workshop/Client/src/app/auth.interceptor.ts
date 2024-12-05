import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMessageService } from './services/error-message.service';

const { apiUrl } = environment;
const api = "/api";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith(api)) {
        req = req.clone({
            url: req.url.replace(api, apiUrl),
            withCredentials: true
        })
    }

    const router = inject(Router);
    const errService = inject(ErrorMessageService);

    return next(req).pipe(
        catchError((err) => {
            if (err.status === 403) {
                router.navigate(['/home']);
            }else{
                errService.setError(err);
                router.navigate(['/error']);
            }

            return [err];
        })
    );
};
