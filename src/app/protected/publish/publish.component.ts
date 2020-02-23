import { Component, OnInit } from "@angular/core";
import { PushNotificationService } from "../../shared/push-notification-service/push-notification.service";
import { Content } from "../../config/content";
import { NewsService } from "src/app/shared/news.service";
import { News } from '../../shared/news.model';

@Component({
  selector: "app-publish",
  templateUrl: "./publish.component.html",
  styleUrls: ["./publish.component.scss"]
})
export class PublishComponent implements OnInit {
  publishLabel: string;
  subscribers: any[] = [];
  news: any[] = [];
  newNews: News = {
    title: '',
    date: new Date().toDateString(),
    src: ''
  }

  constructor(
    private pushService: PushNotificationService,
    private newsService: NewsService
  ) {
    this.publishLabel = Content.protected.publish;
  }

  ngOnInit() {
    this.pushService.getSubscribers().subscribe(res => {
      this.subscribers = res;
    });
    this.newsService.getNews().subscribe((res: any[]) => {
      this.news = res;
    });
  }

  addNews(){
    this.newsService.addNews(this.newNews).subscribe(res => {
      if(!res['error']){
        this.news.push(this.newNews);
        this.resetForm();
      }
    }, err => {
      console.error(err);
    })
  }

  resetForm(){
    this.newNews = {
      title: '',
      date: new Date().toDateString(),
      src: ''
    }
  }

  publish() {
    this.pushService.sendNotification().subscribe();
  }
}
