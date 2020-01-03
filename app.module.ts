import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {UserTestingComponent} from "./dashboard/user-testing/user-testing.component";
import {DataService} from "./services/quest.service";
import {ResultPageComponent} from "./result-page/result-page.component";
import {CreateResultService} from "./services/create-result.service";
import { ActivateGuard }   from './guard/CanActivate.guard';
import { SelectQuestComponent } from './select-quest/select-quest.component';
import { AnimalsTestingComponent } from './dashboard/animals-testing/animals-testing.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./services/auth.service";
import { SummaryResultComponent } from './summary-result/summary-result.component';
import {CheckAuthGuard} from "./guard/CheckAuth.guard";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/json/', '.json');
}

const appRoutes: Routes =[
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CheckAuthGuard] },
  { path: 'summary-result', component: SummaryResultComponent, canActivate: [CheckAuthGuard] },
  { path: 'custom-test', component: UserTestingComponent, canActivate: [ActivateGuard, CheckAuthGuard] },
  { path: 'animals-test', component: AnimalsTestingComponent, canActivate: [ActivateGuard, CheckAuthGuard]},
  { path: 'result-page', component: ResultPageComponent, canActivate: [ActivateGuard, CheckAuthGuard]}
];

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule,
    ReactiveFormsModule, StorageServiceModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }), ],
  declarations: [ AppComponent, DashboardComponent, UserTestingComponent, ResultPageComponent, SelectQuestComponent, AnimalsTestingComponent, LoginComponent, SummaryResultComponent],
  bootstrap:    [ AppComponent ],
  providers: [DataService, CreateResultService, ActivateGuard, AuthService, CheckAuthGuard],
  exports: [ReactiveFormsModule]
})

export class AppModule { }
