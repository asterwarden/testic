import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {DataService} from "../../services/quest.service";
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {CreateResultService} from "../../services/create-result.service";
import {AppConst} from "../../const/main.const";


interface Token {

  data: string;
  token: string;
}

interface Data {
  results: Array<string>;
}

@Component({
  selector: 'user-testing',
  templateUrl: './user-testing.component.html',
  providers: [HttpClient],
  styleUrls: ['./user-testing.component.scss']
})
export class UserTestingComponent implements OnInit {

  pointIndex: number = 0;
  countRight: number = 0;
  questCountSteps: number = 0;

  activeItem: boolean = false;

  choosenAnswer: string;
  resultQuestStep: string;
  

  result: Array<any>;

  constructor(private element: ElementRef,
              private http: HttpClient,
              public dataService: DataService,
              public createResultService: CreateResultService,
              private router: Router) { }

  ngOnInit() {
      this.getQuestions();
      this.pointIndex = 0;
  }

  getQuestions() {
    this.dataService.getData().subscribe((data: Data) => {
      this.result = data.results;
    });
  }

  currentQuest(i: any): boolean {
    return (i == this.pointIndex) ? true : false;
  }

  chooseAnswer(item, res) {
    this.choosenAnswer = res;
    this.activeItem = true;
  }

  getSessionToken() {
    this.dataService.getToken().subscribe((data: Token) => {
      console.log('data', data);
    });
  }

  swapTo(){
    this.router.navigate([AppConst.RESULT_PAGE_ROUTER]);
  }

  goNextStep(index: number) {
    this.dataService.getData().subscribe((data: Data ) => {
      this.result = data.results;
      this.createResultService.addCategory(this.result, index);
      this.questCountSteps = this.result.length;
      this.resultQuestStep = this.result[index].correct_answer;
      if (this.questCountSteps != this.pointIndex + 1) {
        if (this.resultQuestStep == this.choosenAnswer) {
          this.countRight = this.countRight + 1;
        }
        this.pointIndex = this.pointIndex + 1;
      } else {
        this.swapTo();
        this.createResultService.createResult(this.countRight);
        this.createResultService.endTest(
          new Date().getTime()
        );
      }

    });
  }

}
