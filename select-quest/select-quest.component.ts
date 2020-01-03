import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/quest.service";

@Component({
  selector: 'select-quest',
  templateUrl: './select-quest.component.html',
  styleUrls: ['./select-quest.component.scss']
})
export class SelectQuestComponent implements OnInit {

  result: Array<string>;


  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.getAnimalsQuestions();
  }

  getAnimalsQuestions() {
    this.dataService.getData().subscribe((data: any) => {
      this.result = data.results;
    });
  }

  chooseCategory(c) {
    const link = c.categoryLink;

    this.dataService.getCategoryLink(link);
  }

}
