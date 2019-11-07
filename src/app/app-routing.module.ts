import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicComponent} from './public/public.component';
import {ProtectedComponent} from './protected/protected.component';


const routes: Routes = [{
  path: '',
  component: PublicComponent
}, {
  path: 'admin',
  component: ProtectedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
