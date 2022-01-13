import { Component, OnInit } from '@angular/core';
import { ICreateScrapeTask } from 'src/app/models/createScrapeTask';
import { IScrapeTask } from 'src/app/models/scrapeTask';
import { ScrapeTaskService } from 'src/app/services/scrape-task.service';

@Component({
  selector: 'app-add-scrape-task',
  templateUrl: './add-scrape-task.component.html',
  styleUrls: ['./add-scrape-task.component.scss']
})
export class AddScrapeTaskComponent implements OnInit {

  public nameInput: string = "";
  public category: string = "";

  constructor(private scrapeTaskService:ScrapeTaskService) { }

  ngOnInit(): void {
  }

  public submit() {
    var createScrapeTask: ICreateScrapeTask = {
      name: this.nameInput,
      category: this.category
    };

    this.scrapeTaskService.Create(createScrapeTask).subscribe(data => {
      console.log(data);
    });
  }

}
