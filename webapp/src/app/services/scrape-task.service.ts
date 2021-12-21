import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScrapeTask } from '../models/scrapeTask';

@Injectable({
  providedIn: 'root',
})
export class ScrapeTaskService {

  private readonly serverUrl:string = 'http://localhost:3333/scrapetask';

  constructor(private httpClient: HttpClient) { }

  public GetAll(): Observable<IScrapeTask[]> {
    return this.httpClient.get<IScrapeTask[]>(this.serverUrl);
  }
}
