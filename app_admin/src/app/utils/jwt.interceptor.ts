import { inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from '../services/authentication';

export const jwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next
): Observable<HttpEvent<any>> => {
  const auth = inject(Authentication);

  const url = req.url ?? '';
  const isAuthAPI =
    url.endsWith('/login') ||
    url.endsWith('/register') ||
    url.includes('/api/login') ||
    url.includes('/api/register');

  if (auth.isLoggedIn() && !isAuthAPI) {
    const token = auth.getToken();
    if (token) {
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next(authReq);
    }
  }

  return next(req);
};
