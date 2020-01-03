import { Component, OnInit } from '@angular/core';
import { CreateResultService } from "../services/create-result.service";
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  providers: [HttpClient],
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  categoryResult: string;
  resultOfTest: number = 0;
  resultTimeOfTest: number;
  limitTest: number = 7;

  statusResultOfTest: boolean = false;

  constructor(public createResultService: CreateResultService,
              private http: HttpClient)
              { }

  ngOnInit() {
    this.categoryResult = this.createResultService.showCategory();
    this.resultOfTest = this.createResultService.showResult();
    this.resultTimeOfTest = this.createResultService.showTimeResult();
    if (this.resultOfTest >= this.limitTest) {
      this.statusResultOfTest = true;
    }
    this.http.post('http://192.168.100.34:3000/api/addQuestData', {
      categoryResult: this.categoryResult,
      resultOfTest: this.resultOfTest,
      resultTimeOfTest: this.resultTimeOfTest,
      statusResultOfTest: this.statusResultOfTest
    });
  }

}
