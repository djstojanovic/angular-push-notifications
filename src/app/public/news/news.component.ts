import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = [
    {
      title: "The secret to fruitful collaboration",
      date: "January 16th, 2020",
      src: "./assets/images/News_1.jpg"
      },
    {
      title: "Hack9 - It's not about the prize, it's about the pride",
      date: "January 7th, 2020",
      src: "./assets/images/News_2.jpg"
       },
    {
      title: "Tech Doc Festival: Levi9 celebrates 15 year anniversary",
      date: "December 16th, 2019",
      src: "./assets/images/News_3.jpg"
    },
    {
      title: "Disruptieve werkijze op termijn onvermijdelijk",
      date: "December 4th, 2019",
      src: "./assets/images/News_4.jpg"
       },
    {
      title: "Games, workshops and trivia nights: Cybersecurity is fun.",
      date: "November 21th, 2019",
      src: "./assets/images/News_5.jpg"
       }
  ]
  constructor() { }

  ngOnInit() {
  }

}
