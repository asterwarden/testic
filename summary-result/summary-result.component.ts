import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/quest.service";

@Component({
  selector: 'summary-result',
  templateUrl: './summary-result.component.html',
  styleUrls: ['./summary-result.component.scss']
})
export class SummaryResultComponent implements OnInit {

  result;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.setSummaryResult();
  }

  setSummaryResult() {
    this.dataService.setSummaryResult().subscribe((data) => {
      this.result = data;
    });
  }

}
