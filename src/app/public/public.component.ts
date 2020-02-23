import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '../shared/push-notification-service/push-notification.service';
import { Config } from '../config/config';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  icon: string = "/assets/icons/logo.png";

  constructor(private swPush: SwPush,
    private pushService: PushNotificationService) {
    console.log('swPush.isEnabled', swPush.isEnabled)
  }

  ngOnInit(): void {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: Config.publicKey
      }).then(subscription => this.handleSubscription(subscription))
        .catch(error => this.handleSubscriptionError(error));
    } else {
      alert('Push notifications not available');
    }
  }

  
  handleSubscription(subscription) {
    console.log(subscription);
    this.pushService.sendSubscriptionToTheServer(subscription).subscribe((message) => {
      console.log(message);
    }, (error) => {
      console.error(error);
    });
  }

  handleSubscriptionError(error) {
    console.error(error);
  }
}
