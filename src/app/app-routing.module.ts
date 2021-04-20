import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app/app.component';
import {AddComponent} from '../app/add/add.component';

const routes: Routes = [
  {
    path: 'home',
    component:AppComponent
  },

  {
    path: 'add',
    component:AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
