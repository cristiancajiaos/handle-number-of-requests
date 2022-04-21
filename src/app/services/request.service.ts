import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requestNumber = 0;
  private requests = new BehaviorSubject<number>(this.requestNumber);

  constructor() { }

  handleRequest(status?: string): void {
    console.log(`handleRequest(${status})`)
    this.requestNumber = (status.match('start')) ? this.requestNumber + 1 : this.requestNumber - 1;
    this.requests.next(this.requestNumber);
  }

  getRequestNumber(): Observable<number> {
    return this.requests.asObservable();
  }
}
