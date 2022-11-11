import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  constructor(private http:HttpClient) {
    console.log('build')
   }
  getData():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
