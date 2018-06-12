import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getItems(): Observable<any[]> {
        const itemsList: any[] = [];

        return of(itemsList);
    }
}

