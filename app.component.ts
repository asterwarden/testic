import {Component, OnInit, HostListener } from '@angular/core';

interface UserResponse {
  author: string;
  title: string;
  points: number;
  hits: any;
}

@Component({
  selector: 'app-root',
  template: `
          <div>
            <router-outlet></router-outlet> 
          </div>`,
  providers: [],
  styleUrls: []
})


export class AppComponent implements OnInit {

  @HostListener('window:unload', ['$event'])
  clearSessionStorage() {
    sessionStorage.removeItem('sessionActive');
    sessionStorage.removeItem('userName');
  }

  constructor(){
  }


  ngOnInit(): void {

  }
}
