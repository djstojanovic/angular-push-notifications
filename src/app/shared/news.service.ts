import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from './news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient){

    }

    public getNews(){
        return this.http.get(`${environment.apiURL}/news`);
    }

    public addNews(news: News){
        return this.http.post(`${environment.apiURL}/news`, news);
    }

}