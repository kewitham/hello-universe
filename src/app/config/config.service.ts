import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'https://www.googleapis.com/books/v1/users/101108906339499783209/bookshelves?key=AIzaSyConcqJMJqJK4b234sol7lztTbYTeGK1dI';
  getConfig() {
    return this.http.get(this.configUrl);
  }


}

