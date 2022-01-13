import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScrapeTaskComponent } from './components/add-scrape-task/add-scrape-task.component';
import { ScrapeTasksListComponent } from './components/scrape-tasks-list/scrape-tasks-list.component';

const routes: Routes = [
  {path: 'list-scrape-tasks', component: ScrapeTasksListComponent},
  {path: 'add-scrape-task', component: AddScrapeTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
