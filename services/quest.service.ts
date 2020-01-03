import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService{

  categoryLink: string;

  constructor(private http: HttpClient){}



  getData(){
    return this.http.get('http://192.168.100.34:3000/api/getQuestData',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          "Access-Control-Max-Age": "3600"
        }
      });
  }

  getDataAnimals(){
    return this.http.get('http://192.168.100.34:3000/api/getQuestData',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          "Access-Control-Max-Age": "3600"
        }
      });
  }

  getToken() {
    return this.http.get('https://opentdb.com/api_token.php?command=request',
      {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          "Access-Control-Max-Age": "3600"
        }
      }
    )
  }

  setSummaryResult() {
    return this.http.get('http://192.168.100.34:3000/api/getSummaryResult',
      {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          "Access-Control-Max-Age": "3600"
        }
      }
    )
  }

  getCategoryLink(categoryLink) {
    this.categoryLink = categoryLink;
  }

  setCategoryLink() {
    return this.categoryLink;
  }
}
