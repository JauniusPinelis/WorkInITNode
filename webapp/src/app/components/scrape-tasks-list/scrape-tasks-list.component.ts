import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scrape-tasks-list',
  templateUrl: './scrape-tasks-list.component.html',
  styleUrls: ['./scrape-tasks-list.component.scss']
})
export class ScrapeTasksListComponent implements OnInit {

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }

}
