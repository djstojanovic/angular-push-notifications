import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private http: HttpClient) { }

  sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(Config.subscriptionApiURL, subscription);
  }

  sendNotification() {
    return this.http.post(Config.sendApiURL, {});
  }

}
