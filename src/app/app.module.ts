import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {PushNotificationService} from './shared/push-notification-service/push-notification.service';
import {HttpClientModule} from '@angular/common/http';
import {SubscriptionComponent} from './public/subscription/subscription.component';
import {PublicComponent} from './public/public.component';
import {ProtectedComponent} from './protected/protected.component';
import {PublishComponent} from './protected/publish/publish.component';
import {SubscribersComponent} from './protected/subscribers/subscribers.component';
import {SubscribersService} from './protected/subscribers/subscribers.service';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    PublicComponent,
    ProtectedComponent,
    PublishComponent,
    SubscribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [PushNotificationService, SubscribersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
