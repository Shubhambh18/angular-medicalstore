import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FetchComponent } from './fetch/fetch.component';


const routes: Routes = [
  {path : '', component: SearchComponent,pathMatch: 'full'},
  {path : 'fetch', component: FetchComponent,pathMatch: 'full'},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
