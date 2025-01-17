import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {PushNotificationService} from './shared/push-notification-service/push-notification.service';
import {HttpClientModule} from '@angular/common/http';
import {PublicComponent} from './public/public.component';
import {ProtectedComponent} from './protected/protected.component';
import {PublishComponent} from './protected/publish/publish.component';
import { NewsComponent } from './public/news/news.component';
import { NewsService } from './shared/news.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    ProtectedComponent,
    PublishComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [PushNotificationService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
