import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';

const { apiUrl } = environment;
const api = "/api"

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith(api)) {
        req.clone({
            url: req.url.replace(api, apiUrl),
            withCredentials:true
        })
    }

    return next(req);
};
