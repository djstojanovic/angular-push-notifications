import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(`${this.apiURL}/subscription`, subscription);
  }

  sendNotification() {
    return this.http.post(`${this.apiURL}/sendNotification`, {});
  }

  getSubscribers(): Observable<any>{
    return this.http.get(`${this.apiURL}/subscribers`);
  }

}
