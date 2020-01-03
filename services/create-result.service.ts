import {Injectable} from '@angular/core';

@Injectable()
export class CreateResultService{
  private formedResult: number = 0;
  private startTestTime: number;
  private endTestTime: number;
  private viewCategory: string;

  constructor(){}

  createResult(count) {
    this.formedResult = count;
  }

  showResult() {
    return this.formedResult;
  }

  startTest(timeStart) {
    this.startTestTime = timeStart;
  }

  addCategory(addCategory, i) {
    this.viewCategory = addCategory.results[i].category;
  }

  showCategory() {
    return this.viewCategory;
  }

  endTest(timeEnd) {
    this.endTestTime = timeEnd;
  }

  showTimeResult() {
    return new Date(this.endTestTime - this.startTestTime).getSeconds();
  }

}
