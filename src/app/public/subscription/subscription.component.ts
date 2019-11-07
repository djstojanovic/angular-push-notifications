import {Component, OnInit} from '@angular/core';
import {Config} from '../../config/config';
import {SwPush} from '@angular/service-worker';
import {PushNotificationService} from '../../shared/push-notification-service/push-notification.service';
import {Content} from '../../config/content';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  buttonLabel: string;
  error: string;

  constructor(
    private swPush: SwPush,
    private pushService: PushNotificationService) {
    console.log('swPush.isEnabled', swPush.isEnabled);
    this.buttonLabel = Content.public.notifyMe;
  }

  ngOnInit() {
  }

  initSwPush() {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: Config.publicKey
      }).then(subscription => this.handleSubscription(subscription))
        .catch(error => this.handleSubscriptionError(error));
    } else {
      this.error = 'Push notifications not available';
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
