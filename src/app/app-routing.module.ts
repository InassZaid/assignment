import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataListDetailsComponent} from '../app/data-list-details/data-list-details.component';
import {DataListComponent} from '../app/data-list/data-list.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:' ' , redirectTo:'/data', pathMatch:'full'},
  {path:'data' ,component:DataListComponent},
  {path:'data/:id' ,component:DataListDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
