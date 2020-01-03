import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CreateResultService} from "../../services/create-result.service";
import {DataService} from "../../services/quest.service";
import {AppConst} from "../../const/main.const";

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router,
               public createResultService: CreateResultService,
               public dataService: DataService) { }

  ngOnInit() {
  }

  swapTo(){
    sessionStorage.setItem('sessionActive', 'true');
    let categoryLinkToStart: string = this.dataService.setCategoryLink();
    this.createResultService.startTest(
      new Date().getTime()
    );
    this.router.navigate([categoryLinkToStart]);
  }

  checkResult() {
    this.router.navigate([AppConst.SUMMARY_RESULT_ROUTER]);
  }

}
