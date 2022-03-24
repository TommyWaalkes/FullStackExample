import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Cat } from './Cat';


@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  endpoint: string = "api/cats";
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  GetCats() {
    let fullUrl: string = this.baseUrl + this.endpoint;
    return this.http.get<Cat[]>(fullUrl);
  }

  CreateCat(c: Cat) {
    console.log(c);
    let fullUrl: string = this.baseUrl + this.endpoint;
    return this.http.put(fullUrl, c);
  }
}
