import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScrapeTask } from '../models/scrapeTask';
import { ICreateScrapeTask } from '../models/createScrapeTask';

@Injectable({
  providedIn: 'root',
})
export class ScrapeTaskService {

  private readonly serverUrl:string = 'http://localhost:3333/scrapetask';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IScrapeTask[]> {
    return this.httpClient.get<IScrapeTask[]>(this.serverUrl);
  }

  public Create(createScrapeTask: ICreateScrapeTask): Observable<number> {
    return this.httpClient.post<number>(this.serverUrl, createScrapeTask);
  }
}
