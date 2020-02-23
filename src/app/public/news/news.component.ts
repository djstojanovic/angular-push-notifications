import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { TimelineLite } from "gsap";
import { News } from 'src/app/shared/news.model';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit, AfterViewInit {
  @ViewChild("newsEl", { static: true }) newsEl: ElementRef;
  tl: any;

  news: News[];
  constructor(
    private newsService: NewsService
  ) {
    this.tl = new TimelineLite();
  }

  ngOnInit() {
    this.newsService.getNews().subscribe((res: any[]) => {
      this.news = res;
      setTimeout(() => {
        this.animateIn();
      }, 1000)
    });
  }

  ngAfterViewInit() {
    
  }

  animateIn() {
    const newsElms = this.newsEl.nativeElement.querySelectorAll(".news");
    console.log(newsElms);
    this.tl.set(newsElms, { autoAlpha: 0, y: 20 });
    this.tl.staggerTo(newsElms, 0.6, {
      autoAlpha: 1,
      y: 0,
      stagger: { amount: 0.6 }
    });
  }
}
