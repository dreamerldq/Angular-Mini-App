import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {StudioComponent} from './studio/studio.component'
import {StudioDetailComponent} from './studio-detail/studio-detail.component'
import { TodolistComponent } from './todolist/todolist.component'
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'studio', component: StudioComponent},
  { path: 'todolist', component: TodolistComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'studio/:id', component: StudioDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
