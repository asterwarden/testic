import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private mainForm: FormGroup;
  private subForm: FormGroup;

  tmp = 1;

  @Input()
  get startValue() {
    return this.tmp;
  }

  set dd(data: number) {
    this.tmp = data;
  }

  currentLabel: string = 'Стандартный';

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    let tmp = this.authService.setUser();

    console.log('tmp ->', tmp);

    this.mainForm = this.fb.group({
      "nameField": [2, Validators.required],
      "surnameField": ['', Validators.required],
    });
    this.subForm = this.fb.group({
      "dateReceiver": ['', Validators.pattern("[0-9]{10}")],
    });
    this.authData();

    let a: number = this.tmp*2;

    this.dd = a;

    // this.testObs().subscribe(tasks => {
    //   console.log(tasks);
    // });

    let getStart =  function() {
      return this.tmp;
    }

  }

  authData() {
    const defaultCode: number = 199;
    const newLabel: string = 'Измененный';
    const login = (setDataToForm, defaultCode, newLabel) => {
      return setDataToForm(defaultCode, newLabel)
    };

    const setDataToForm = (defaultCode, newLabel) => {
      this.subForm.controls['dateReceiver'].setValue(defaultCode);
      this.changeCurrentLabel(newLabel);
    };

    login(setDataToForm, defaultCode, newLabel);

  }

  changeCurrentLabel(label) {
    this.currentLabel = label;
  }

  onChangeName(result) {
    console.log('res ->', this.mainForm.get(result));
  }

  checkData() {

  }

  testObs() {
  //   // return ['1','2','3','4'].map(res => console.log(res));
  //   return this.http.get('http://localhost:3000/api/tasks')
  //     .map(res => res.json());
  }
}
