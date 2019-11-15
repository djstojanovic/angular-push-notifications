import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  subscriptionApiURL = 'http://localhost:3000/subscription';
  sendApiURL = 'http://localhost:3000/sendNotification';

  constructor(private http: HttpClient) { }

  sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(this.subscriptionApiURL, subscription);
  }

  sendNotification() {
    return this.http.post(this.sendApiURL, {});
  }

}
