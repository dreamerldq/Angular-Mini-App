import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudioComponent } from './studio/studio.component';
import { StudioService } from './studio.service';
import { StudioDetailComponent } from './studio-detail/studio-detail.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodofilterComponent } from './todofilter/todofilter.component';
import { TodofilterService } from './todofilter.service'
import { NewmoduleModule } from './newmodule.module'
 
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    StudioComponent,
    StudioDetailComponent,
    TodolistComponent,
    TodofilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NewmoduleModule

  ],
  providers: [
    HeroService,
    MessageService,
    StudioService,
    TodofilterService
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }