import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ApiRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiRestProvider {

  apiUrl = 'http://192.168.1.19:8080/';
  constructor(public http: HttpClient) {
    console.log('Hello ApiRestProvider Provider');
  }

  getPublicTrips(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'trips/public').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addTrip(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'trips', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
