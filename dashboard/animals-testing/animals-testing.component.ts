import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService} from "../../services/quest.service";
import {CreateResultService} from "../../services/create-result.service";
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {AppConst} from "../../const/main.const";

interface Data {
  results: Array<string>;
}

@Component({
  selector: 'animals-testing',
  templateUrl: './animals-testing.component.html',
  styleUrls: ['./animals-testing.component.scss']
})
export class AnimalsTestingComponent implements OnInit {

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

  currentQuest(i: number): boolean {
    return (i == this.pointIndex) ? true : false;
  }

  chooseAnswer(item, res) {
    this.choosenAnswer = res;
    this.activeItem = true;
  }

  getSessionToken() {
    this.dataService.getToken().subscribe((data: Data) => {
      console.log('data', data);
    });
  }

  swapTo(){
    this.router.navigate([AppConst.RESULT_PAGE_ROUTER]);
  }

  StepgoNext(index: number) {
    this.dataService.getData().subscribe((data: Data) => {
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
