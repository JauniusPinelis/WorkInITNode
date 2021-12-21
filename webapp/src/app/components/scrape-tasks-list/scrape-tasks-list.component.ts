import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScrapeTask } from 'src/app/models/scrapeTask';
import {ScrapeTaskService } from 'src/app/services/scrape-task.service';

@Component({
  selector: 'app-scrape-tasks-list',
  templateUrl: './scrape-tasks-list.component.html',
  styleUrls: ['./scrape-tasks-list.component.scss']
})
export class ScrapeTasksListComponent implements OnInit {
  public scrapeTasks: IScrapeTask[] = [];

  constructor(private scrapeTaskService:ScrapeTaskService ) {
  }

  ngOnInit(): void {
    this.GetAll().subscribe(data => {
      this.scrapeTasks = data;
    });
  }

  public GetAll(): Observable<IScrapeTask[]> {
    return this.scrapeTaskService.GetAll();
  }

}
