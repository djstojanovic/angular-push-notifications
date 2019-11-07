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

  constructor(private pushService: PushNotificationService) {
    this.publishLabel = Content.protected.publish;
  }

  ngOnInit() {
  }

  publish() {
    this.pushService.sendNotification().subscribe();
  }

}
