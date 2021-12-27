import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrapeTasksListComponent } from './components/scrape-tasks-list/scrape-tasks-list.component';
import { AddScrapeTaskComponent } from './components/add-scrape-task/add-scrape-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrapeTasksListComponent,
    AddScrapeTaskComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
