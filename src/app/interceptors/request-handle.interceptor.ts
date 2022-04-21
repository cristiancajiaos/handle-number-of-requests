import { RequestService } from './../services/request.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class RequestHandleInterceptor implements HttpInterceptor {

  constructor(
    private request: RequestService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.request.handleRequest('start');
    return next.handle(request).pipe(
      finalize(() => {
        this.request.handleRequest('end');
        return this.finalize.bind(this);
      })
    );
  }

  finalize = (): void => { }
}
