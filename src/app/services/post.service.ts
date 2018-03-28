import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ipost } from '../domain/ipost';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }


  getPost(): Observable<Ipost[]> {
   // return this._http.get(this.url).map((resp: Response) => resp.json());
   return this._http.get<Ipost[]>(this.url);
  }
}
