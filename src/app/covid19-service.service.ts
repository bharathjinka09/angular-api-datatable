import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Covid19ServiceService {
  url = 'https://corona.lmao.ninja/v3/covid-19/countries';
  constructor(private http: HttpClient) {}

  public covid19Reports() {
    return this.http.get(this.url);
  }
}
