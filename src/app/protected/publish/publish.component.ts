import { Component, OnInit } from '@angular/core';
import {PushNotificationService} from '../../shared/push-notification-service/push-notification.service';
import {Content} from '../../config/content';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  publishLabel: string;
  subscribers: any[] = [];

  constructor(private pushService: PushNotificationService) {
    this.publishLabel = Content.protected.publish;
  }

  ngOnInit() {
    this.pushService.getSubscribers().subscribe((res) => {
      this.subscribers = res;
    })
  }

  publish() {
    this.pushService.sendNotification().subscribe();
  }

}
