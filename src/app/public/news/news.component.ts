import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = [
    {
      title: "News1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a porta ipsum. Integer sollicitudin, ligula eu interdum hendrerit, lectus ex bibendum urna, ac posuere mauris nulla et tortor. Pellentesque quis tristique elit. In venenatis malesuada orci, et egestas ipsum pulvinar in. Quisque posuere consectetur justo, in feugiat dui scelerisque et."
    },
    {
      title: "News2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a porta ipsum. Integer sollicitudin, ligula eu interdum hendrerit, lectus ex bibendum urna, ac posuere mauris nulla et tortor. Pellentesque quis tristique elit. In venenatis malesuada orci, et egestas ipsum pulvinar in. Quisque posuere consectetur justo, in feugiat dui scelerisque et."
    },
    {
      title: "News3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a porta ipsum. Integer sollicitudin, ligula eu interdum hendrerit, lectus ex bibendum urna, ac posuere mauris nulla et tortor. Pellentesque quis tristique elit. In venenatis malesuada orci, et egestas ipsum pulvinar in. Quisque posuere consectetur justo, in feugiat dui scelerisque et."
    },
    {
      title: "News4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a porta ipsum. Integer sollicitudin, ligula eu interdum hendrerit, lectus ex bibendum urna, ac posuere mauris nulla et tortor. Pellentesque quis tristique elit. In venenatis malesuada orci, et egestas ipsum pulvinar in. Quisque posuere consectetur justo, in feugiat dui scelerisque et."
    },
    {
      title: "News5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a porta ipsum. Integer sollicitudin, ligula eu interdum hendrerit, lectus ex bibendum urna, ac posuere mauris nulla et tortor. Pellentesque quis tristique elit. In venenatis malesuada orci, et egestas ipsum pulvinar in. Quisque posuere consectetur justo, in feugiat dui scelerisque et."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
